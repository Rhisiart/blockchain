/*import {io} from '../Server';

import { Card } from "../Class/Card";
import { User } from "../Class/User";

export const tradeMoneyAndCards = (buyerUser : User, sellerUser : User, price : number, cards : Array<Card>) => {
    const bancAccountOfBuyerUser = buyerUser.getBancAccount;
    
    if(bancAccountOfBuyerUser.getMoney >= price && verifyOwner(cards))
    {
        sellerUser.getBancAccount.modifyMoney(price, true);
        bancAccountOfBuyerUser.modifyMoney(price, false);

        cards.forEach(card => {
            card.owner = buyerUser;
        });
    }
}

export const tradeCards = (buyerUser : User, sellerUser : User, cardsOfBuyer : Array<Card>, cardsOfSeller : Array<Card>) => {

    if(verifyOwner(cardsOfBuyer) && verifyOwner(cardsOfSeller))
    {
        cardsOfBuyer.forEach( card => {
            card.owner = sellerUser;
        })

        cardsOfSeller.forEach( card => {
            card.owner = buyerUser;
        })
    }
}

const verifyOwner  = (cards : Array<Card>) : boolean  => {
    const newArray = cards.filter((card) => cards[0].getOwner === card.getOwner);

    return newArray.length === cards.length ? true : false;
}*/