import * as crypto from 'crypto';
import { Card } from '../Class/Card';
import {Transaction} from './Transaction';
import {Chain} from './Chain';

export class Wallet {
    private publicKey : string;
    private privateKey : string;

    constructor()
    {
        const keyPair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        });

            this.privateKey = keyPair.privateKey;
            this.publicKey = keyPair.publicKey; 
    }

    get getPublicKey() : string 
    {
        return this.publicKey;
    }

   tradeCards(to : Wallet, cardSend : Array<Card>, cardReceive : Array<Card>)
   {
        this.transactionCard(this.publicKey, to.getPublicKey, cardSend);
        this.transactionCard(to.getPublicKey, this.publicKey, cardReceive);
   }

   buyOrSellCards(isToSell : boolean, to : Wallet, card : Array<Card>, amount : number)
   {
        if(isToSell)
        {
            this.transactionMoney(to.getPublicKey, this.publicKey, amount);
            this.transactionCard(this.publicKey, to.getPublicKey, card);
        }
        else
        {
            this.transactionMoney(this.publicKey, to.getPublicKey, amount);
            this.transactionCard(to.getPublicKey, this.publicKey, card);
        }
   }

    private transactionCard(fromPKey : string, toPKey : string, card : Array<Card>)
   {
        const transactionCard = new Transaction(fromPKey, toPKey);
        transactionCard.setCard = card;
        this.setSingnature(transactionCard);
   }

   private transactionMoney(fromPKey : string, toPKey : string, amount : number)
   {
        const transactionAmount = new Transaction(fromPKey, toPKey);
        transactionAmount.setAmount = amount;
        this.setSingnature(transactionAmount);
   }

   private setSingnature(transaction : Transaction)
   {
       const sign = crypto.createSign('SHA256');
       sign.update(transaction.toString()).end();

       const signature = sign.sign(this.privateKey);
       Chain.instance.addBlock(transaction, this.publicKey, signature);
   }
}