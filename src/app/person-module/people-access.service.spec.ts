/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleAccessService } from './people-access.service';

describe('Service: PeopleAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleAccessService]
    });
  });

  it('should ...', inject([PeopleAccessService], (service: PeopleAccessService) => {
    expect(service).toBeTruthy();
  }));
});
