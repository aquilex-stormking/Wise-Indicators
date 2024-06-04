import { TestBed } from '@angular/core/testing';

import { CoulumbiaService } from './coulumbia.service';

describe('CoulumbiaService', () => {
  let service: CoulumbiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoulumbiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
