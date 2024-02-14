import { TestBed } from '@angular/core/testing';

import { searchCepService } from './search-cep.service';

describe('SearchCEPService', () => {
  let service: searchCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(searchCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
