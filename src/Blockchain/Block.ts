import * as crypto from 'crypto';
import {Transaction} from './Transaction';

export class Block {
    private PrevHash : string;
    private Data : Transaction;
    private DateTime : number;
    private Nonce : number;

    constructor(prevHash : string, transaction : Transaction)
    {
        this.DateTime = Date.now();
        this.PrevHash = prevHash;
        this.Data = transaction;
    }

    get hash() : string
    {
        const str = JSON.stringify(this);
        const hash = crypto.createHash('SHA256');
        hash.update(str).end();
        
        return hash.digest('hex');
    }

    get nonce() : number
    {
        return Math.round(Math.random() * 999999999);
    }
}