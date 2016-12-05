import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Person, PersonClass } from './models/Person';
import { PeopleAccessService, AppStore} from './people-access.service';




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
    labelName:string;
    
  personList:Observable<Array<Person>>;
  peopleAccessService:PeopleAccessService;


  constructor(private _peopleAccessService:PeopleAccessService
  ){
    
    this.peopleAccessService = _peopleAccessService;
    this.personList = this.peopleAccessService.personList;
  }

  ngOnInit(){
    this.labelName = 'Enter Person details to add';
      this.name='';
      this.address='';
      this.id =0;
  }

  addPerson(){
      this.person = new PersonClass(this.id++,this.name,this.address);
      this.peopleAccessService.addPerson(this.person);
  }
    deletePerson(id:Number){
        this.peopleAccessService.deletePerson(id);
    }
}
