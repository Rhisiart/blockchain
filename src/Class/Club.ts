import { League } from "./League";

export class Club {
    private League : League;
    private Name : string;

    constructor(name : string, league : League)
    {
        this.Name = name;
        this.League = league;
    }
}