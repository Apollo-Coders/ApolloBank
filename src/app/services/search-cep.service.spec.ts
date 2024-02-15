import { TestBed } from '@angular/core/testing';

import { searchCepService } from './search-cep.service';
import { HttpClientModule } from '@angular/common/http';

describe('SearchCEPService', () => {
  let service: searchCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(searchCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
