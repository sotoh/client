import { TestBed } from '@angular/core/testing';

import { AuditoroperationsService } from './auditoroperations.service';

describe('AuditoroperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditoroperationsService = TestBed.get(AuditoroperationsService);
    expect(service).toBeTruthy();
  });
});
