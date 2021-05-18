import {Card} from '../Class/Card';

export class Transaction {
    private Sender: string;
    private Recipient : string;
    private Cards : Array<Card>;
    private Amount : number;

    constructor(sender : string, recipient : string)
    {
        this.Recipient = recipient;
        this.Sender = sender;
    }

    set setAmount(amount : number)
    {
        this.Amount = amount;
    }

    set setCard(cards : Array<Card>)
    {
        this.Cards = cards;
    }

    get getSender()
    {
        return this.Sender;
    }

    toString() : string {
        return JSON.stringify(this);
    }
}
