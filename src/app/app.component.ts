import { Component, OnInit } from '@angular/core';
import { PersonListService } from './person-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchPersonBy:string
  labelName:string
  //addPerson:string
  _personListService:PersonListService;
  _displayPersonList;

  constructor(personListService:PersonListService){
    this._personListService = personListService;
    this._displayPersonList = this._personListService.getPersonList();
  }
  ngOnInit(){
    this.searchPersonBy = null;
    this.labelName = 'Enter Person Name to Search';
    //this.addPerson = null;
  }

  addPerson(personName:string){
   this._personListService.addPerson(personName);
  }


}
