import { Component, OnInit } from '@angular/core';
import { PersonListService } from '../person-list.service';

@Component({
   selector: 'app-person-module',
  templateUrl: './person-module.component.html',
  styleUrls: ['./person-module.component.scss']
})
export class PersonModuleComponent implements OnInit {

  searchPersonBy:string
  labelName:string
  //addPerson:string
  _personListService:PersonListService;

  constructor(personListService:PersonListService){
    this._personListService = personListService;
  }
  ngOnInit(){
    this.searchPersonBy = null;
    this.labelName = 'Enter Person Name to Search';
  }

  addPerson(personName:string){
    this._personListService.addPerson(personName);
  }


}
