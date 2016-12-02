import { Injectable } from '@angular/core';

@Injectable()
export class PersonListService {

  constructor() {
  }
  personList:Array<any> =[{name:"dhiraj",address:"address1"}];

  addPerson(person:string){
   this.personList = [ ...this.personList,{name:person,address:`This is person's ${person} address`}];
  }
  getPersonList(){
    return this.personList;
  }
}
