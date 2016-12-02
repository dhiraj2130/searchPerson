import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  peopleName:string
  
  constructor() { }

  ngOnInit() {
    this.peopleName = null;
  }

  addPeople(people){

  }
}
