/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleAccessService } from './people-access.service';
import { StoreModule } from '@ngrx/Store';
import { people } from './home.reducer';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/Store';
import { AppStore } from './people-access.service';
import { Person,PersonClass } from "./models/Person";

class MockStore {
  constructor(){}
  select(){}
  dispatch(){}
}


describe('Service: PeopleAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers: [{provide:Store,useClass:MockStore},PeopleAccessService]
      //providers: [StoreModule.provideStore({people}),PeopleAccessService]
    });
    this.person = new PersonClass(0,"name","address");
  });

  it('should initialise', inject([PeopleAccessService], (service: PeopleAccessService) => {
    expect(service).toBeTruthy();
  }));

  
// store mocking is not working.
  //Need to read https://github.com/ngrx/store/issues/78
  //https://github.com/ngrx/store-devtools/blob/master/spec/store.spec.ts
  xit('should invoke addPerson and deletePerson',inject([Store,PeopleAccessService,], (_store,service: PeopleAccessService) => {
    expect(service).toBeTruthy();
    spyOn(_store,'dispatch');
    service.addPerson(this.person);
    expect(_store.dispatch).toHaveBeenCalled();

  }));

});
