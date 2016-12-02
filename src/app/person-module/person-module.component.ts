import { Component, OnInit } from '@angular/core';
//import { PersonListService } from '../person-list.service';
import { Observable } from "rxjs/Observable";
import { Person } from './models/Person';
import { PeopleAccessService, AppStore} from './people-access.service';
import { Store } from '@ngrx/Store';

@Component({
   selector: 'app-person-module',
  templateUrl: './person-module.component.html',
  styleUrls: ['./person-module.component.scss']
})
export class PersonModuleComponent implements OnInit {

  searchPersonBy:string
  labelName:string
  //addPerson:string
  personList:Observable<Array<Person>>;
  selectedPerson:Observable<Person>;
  //personListService:PersonListService;
  peopleAccessService:PeopleAccessService;
 // store:Store;
 

  constructor(/*personListService:PersonListService,*/
              private _peopleAccessService:PeopleAccessService,
              private _store:Store<AppStore>){
    
    this.peopleAccessService = _peopleAccessService;
    //this.store = _store;
    this.personList = this.peopleAccessService.personList;
    //this._personListService = personListService;
  }

  ngOnInit(){
    this.searchPersonBy = null;
    this.labelName = 'Enter Person Name to Search';
  }

  addPerson(personName:string){
    //this._personListService.addPerson(personName);
  }


}
