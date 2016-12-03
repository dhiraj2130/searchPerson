/**
 * Created by dhiraj.kumar on 2/12/2016.
 */
export interface Person{
    id:number;
    name:string;
    address:string;
}

export class PersonClass  implements Person{

    id = 0;
    name ="defaultname";
    address ="defaultaddress"
    constructor(id,name,address){
        this.id = id;
        this.name =name;
        this.address = address;
    }
}