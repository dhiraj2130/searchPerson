import { Injectable } from '@angular/core';

@Injectable()
export class PersonListService {

  constructor() {
  }
  personList:Array<any> =[{name:"dhiraj",address:"address1"}];

  addPerson(person:string){
   this.personList = [ ...this.personList,{name:person,address:`This is person's ${person} address`}];
    //console.log(JSON.stringify(this.personList));
  }
  getPersonList(){
    return this.personList;
  }
}
