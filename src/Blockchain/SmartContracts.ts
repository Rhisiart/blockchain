import { Card } from '../Class/Card';
import {JsonProperty} from '../API/Services/JsonHelper';

export class SmartContract {
    @JsonProperty({clazz: Card})
    private CardsSell : Array<Card> ;
    private PublicKeyBuyer : string = undefined;
    private Price : number ;
    private PublicKeySeller : string= undefined ;
    @JsonProperty({clazz: Card})
    private CardsReceive :  Array<Card> ;
}