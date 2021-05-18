export class BancAccount {
    private Money : number;

    constructor(money : number)
    {
        this.Money = money;
    }

    modifyMoney(amount : number, isAdd : boolean)
    {
        this.Money = isAdd ? this.Money + amount : this.Money - amount;
    }

    get getMoney()
    {
        return this.Money;
    }
}