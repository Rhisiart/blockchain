import { Card } from "../../Class/Card";
import { User } from "../../Class/User";

export interface Request {
    Buyer : User,
    Seller : User,
    Cards : Array<Card>,
    Price : number
}