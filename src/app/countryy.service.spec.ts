import { TestBed } from '@angular/core/testing';

import { CountryyService } from './countryy.service';

describe('CountryyService', () => {
  let service: CountryyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
