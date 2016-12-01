/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonListService } from './person-list.service';

describe('Service: PersonList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonListService]
    });
  });

  it('should ...', inject([PersonListService], (service: PersonListService) => {
    expect(service).toBeTruthy();
  }));
});
