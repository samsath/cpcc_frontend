import { TestBed, inject } from '@angular/core/testing';

import { TripdataService } from './tripdata.service';
import {describe} from 'selenium-webdriver/testing';

describe('TripdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripdataService]
    });
  });

  it('should ...', inject([TripdataService], (service: TripdataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTrip()', () =>{

  })
});
