import { TestBed } from '@angular/core/testing';

import { LocalstoragedataService } from './localstoragedata.service';

describe('LocalstoragedataService', () => {
  let service: LocalstoragedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoragedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
