import { Component, OnInit } from '@angular/core';
//import { PersonListService } from '../person-list.service';
import { Observable } from "rxjs/Observable";
import { Person, PersonClass } from './models/Person';
import { PeopleAccessService, AppStore} from './people-access.service';
//import { Store } from '@ngrx/Store';



@Component({
   selector: 'app-person-module',
  templateUrl: './person-module.component.html',
  styleUrls: ['./person-module.component.scss']
})



export class PersonModuleComponent implements OnInit {

    person:PersonClass;
    id:number;
    name:string;
    address:string;
   labelName:string
  //addPerson:string
  personList:Observable<Array<Person>>;
  selectedPerson:Observable<Person>;
  //personListService:PersonListService;
  peopleAccessService:PeopleAccessService;
 // store:Store;
 

  constructor(/*personListService:PersonListService,*/
              private _peopleAccessService:PeopleAccessService
      //,             private _store:Store<AppStore>
  ){
    
    this.peopleAccessService = _peopleAccessService;
    //this.store = _store;
    this.personList = this.peopleAccessService.personList;
    //this._personListService = personListService;
  }

  ngOnInit(){
   // this.searchPersonBy = null;
    this.labelName = 'Enter Person details to add';
      this.id =0;
  }

  addPerson(){
      this.person = new PersonClass(this.id++,this.name,this.address);
      //this.person.id = this.id++;
      //person:Person = {id:this.id++,name:this.personName,address:this.personAddress}
      this.peopleAccessService.addPerson(this.person);
  }


}
