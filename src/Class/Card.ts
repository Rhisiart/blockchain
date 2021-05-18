import { Player } from './Player';
import {User} from './User';

export class Card {
    private Player : Player;
    private Amount : number;
    private Number : number;
    private Rarity : number;
    private Owner : User;

    constructor();
    constructor(player : Player, amount : number, number : number, rarity : number, owner : User);
    constructor(player? : Player, amount? : number, number? : number, rarity? : number, owner? : User)
    {
        this.Player = player;
        this.Amount = amount;
        this.Number = number;
        this.Rarity = rarity;
        this.Owner = owner;
    }
    

    set owner(user : User)
    {
        this.Owner = user;
    }

    get getOwner()
    {
        return this.Owner;
    }
}