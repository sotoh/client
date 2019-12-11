import { TestBed } from '@angular/core/testing';

import { AuditsoperationService } from './auditsoperation.service';

describe('AuditsoperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditsoperationService = TestBed.get(AuditsoperationService);
    expect(service).toBeTruthy();
  });
});
