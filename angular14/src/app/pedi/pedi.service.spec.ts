import { TestBed } from '@angular/core/testing';

import { pediService } from './pedi.service';
describe('SupplierService', () => {
  let service: pediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pediService);  
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
