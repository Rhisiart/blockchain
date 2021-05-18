import {Wallet} from '../Blockchain/Wallet';
import { BancAccount } from './BancAccount';

let id = 0;

export class User {
    private Id : number;
    private Name : string;
    private Wallet : Wallet;
    private BancAccount : BancAccount;
    
    constructor(name : string, wallet : Wallet, bancAccount : BancAccount)
    {
        this.Id = id++;
        this.BancAccount = bancAccount;
        this.Name = name;
        this.Wallet = wallet;
    }

    get getBancAccount()
    {
        return this.BancAccount;
    }

    get getWallet()
    {
        return this.Wallet;
    }

    get getName()
    {
        return this.Name;
    }
}