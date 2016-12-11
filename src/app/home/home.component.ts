import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//https://scotch.io/tutorials/angular-2-form-validation
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  peopleName:string;
  complexForm : FormGroup;
  
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.compose([Validators.required, Validators.minLength(3)])],
    'gender':[null,Validators.required],
      'hiking':false
    })
  }

  submitForm(value:any):void{
    console.log(value);
  }

  ngOnInit() {
    this.peopleName = null;
  }

  addPeople(people){
  }
}
