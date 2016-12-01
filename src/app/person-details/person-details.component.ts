import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  constructor() { }
  @Input() person;

  ngOnInit() {
  }

}
