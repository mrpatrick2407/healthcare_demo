import { TestBed } from '@angular/core/testing';

import { SymptomcheckerService } from './symptomchecker.service';

describe('SymptomcheckerService', () => {
  let service: SymptomcheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymptomcheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
