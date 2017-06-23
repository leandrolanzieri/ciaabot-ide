import { TestBed, inject } from '@angular/core/testing';

import { CompilingService } from './compiling.service';

describe('CompilingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompilingService]
    });
  });

  it('should be created', inject([CompilingService], (service: CompilingService) => {
    expect(service).toBeTruthy();
  }));
});
