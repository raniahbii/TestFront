import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let contacts = [
    {id : 1, nom: "ra", prenom: "channel1" , datenaissance : "12/11/2010" } , 
    {id : 2,nom: "ri", prenom: "channel2", datenaissance : "12/11/2010"} , 
    {id : 3,nom: "reg", prenom: "channel3", datenaissance : "12/11/2010" } , 
    {id : 4,nom: "hf", prenom: "channel4", datenaissance : "12/11/2010"} , 
    {id : 5,nom: "dgd", prenom: "channel5", datenaissance : "12/11/2010"} 
        ] ; 
        return {contacts};
    }
}