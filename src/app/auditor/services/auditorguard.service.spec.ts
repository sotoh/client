import { TestBed } from '@angular/core/testing';

import { AuditorguardService } from './auditorguard.service';

describe('AuditorguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditorguardService = TestBed.get(AuditorguardService);
    expect(service).toBeTruthy();
  });
});
