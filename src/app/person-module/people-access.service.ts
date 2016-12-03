import { Injectable } from '@angular/core';

import { Store } from '@ngrx/Store';
import { Person } from "./models/Person";
import { Observable } from "rxjs/Observable";


export interface AppStore{
  personList:Person[];

}


@Injectable()
export class PeopleAccessService {


  personList: Observable<Array<Person>>;
  
  constructor(private _store:Store<AppStore>) {
  this.personList = _store.select('people');
    // the above is somehow equivalent to 
    // this.personList = _store.map(state => state['person']);
    
  }
}


