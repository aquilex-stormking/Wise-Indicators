import { TestBed } from '@angular/core/testing';

import { KansasService } from './kansas.service';

describe('KansasService', () => {
  let service: KansasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KansasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
