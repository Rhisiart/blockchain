/*import {Transaction} from './Blockchain/Transaction';
import {Block} from './Blockchain/Block';
import * as crypto from 'crypto';
import { Wallet } from './Blockchain/Wallet';
import { Card } from './Class/Card';
import { Chain } from './Blockchain/Chain';
import {tradeMoneyAndCards, tradeCards} from './API/Services/SmartContracts';
import { User } from './Class/User';
import { BancAccount } from './Class/BancAccount';
import { Player } from './Class/Player';
import { Club } from './Class/Club';
import { League } from './Class/League';

const wallet1 = new Wallet();
const wallet2 = new Wallet();
const wallet3 = new Wallet();

const bancAccount1 = new BancAccount(200);
const bancAccount2 = new BancAccount(10);
const bancAccount3 = new BancAccount(1000);

const user1 = new User('a', wallet1, bancAccount1);
const user2 = new User('b', wallet2, bancAccount2);
const user3 = new User('c', wallet2, bancAccount2);

const cr7 = new Player('Cristino Ronaldo', 36, 'F9', 'Portugal', new Club('juv', new League('italy', 'italy')), 7);

const cardCR7 = new Card(cr7, 100, 20, 5, user2);
const card2 = new Card(cr7, 100, 20, 5, user2);
const card = new Card(cr7, 100, 20, 5, user1);

//tradeMoneyAndCards(user1, user2, 100, [cardCR7]);
tradeCards(user1,user2,[card], [cardCR7, card2]);
//console.log(user1.getBancAccount.getMoney);
//console.log(user2.getBancAccount.getMoney);
console.log(cardCR7.getOwner);
console.log(card.getOwner);
console.log(card2.getOwner);
console.log(Chain.instance);
player1.buyOrSellCards(false, player2, [cardCR7], 10);

console.log(Chain.instance.chain[1].hash);

console.log(Chain.instance);
console.log(Chain.instance.chain.length);*/

import MapUtils from "./API/Services/JsonHelper";
import {SmartContract} from './Blockchain/SmartContracts';

let exemple = {
                "PublicKeySeller":"a"
            }

const test = MapUtils.deserialize(SmartContract, exemple);
console.log(test);
