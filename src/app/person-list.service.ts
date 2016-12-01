import { Injectable } from '@angular/core';

@Injectable()
export class PersonListService {

  constructor() { }
  personList:Array<any> =["dhiraj"];

  addPerson(person:string){
   this.personList = [ ...this.personList,{personName:person,personAddress:`This is person's ${person} address`}];
  }
  getPersonList(){
    return this.personList;
  }
}
