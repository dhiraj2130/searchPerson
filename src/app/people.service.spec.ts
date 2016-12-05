/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleService } from './people.service';

describe('Service: People', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService]
    });
  });

  xit('should ...', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
