import { Club } from "./Club";

export class Player{
    private Name : string;
    private Age : number;
    private Position : string; // Can be class
    private Country : string; // Can be class
    private Club : Club;
    private JerseyNumber : number;

    constructor(name : string, age : number, position : string, country : string , club : Club, jerseyNumber : number)
    {
        this.Name = name;
        this.Age = age;
        this.Position = position;
        this.Country = country;
        this.Club = club;
        this.JerseyNumber = jerseyNumber;
    }
}