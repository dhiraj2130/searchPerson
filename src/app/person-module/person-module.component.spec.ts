/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PeopleAccessService, AppStore} from './people-access.service';
import { StoreModule } from '@ngrx/Store';
import { people } from './home.reducer';

import { PersonModuleComponent } from './person-module.component';
import { FormsModule } from '@angular/forms';

class MockPeopleAccessService {
  constructor(){}
  addPerson(){}
}

describe('PersonModuleComponent', () => {
  let component: PersonModuleComponent;
  let fixture: ComponentFixture<PersonModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ,StoreModule.provideStore({people})],
      declarations: [ PersonModuleComponent ],
      providers: [{provide:PeopleAccessService,useClass:MockPeopleAccessService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and initialise in ngOnInit()', () => {
    expect(component).toBeTruthy();
    expect(component.labelName).toEqual('Enter Person details to add');
    expect(component.name).toEqual('');
    expect(component.address).toEqual('');
    expect(component.id).toEqual(0);
  });

  xit('should access peopleAccessService',inject([PeopleAccessService],(service:PeopleAccessService) =>{
    expect(service).toBeTruthy();

    spyOn(MockPeopleAccessService,'addPerson');

    component.addPerson();
    fixture.detectChanges();
    expect(service.addPerson).toHaveBeenCalled();
  }))
});
