import { TestBed } from '@angular/core/testing';

import { AuditorindexService } from './auditorindex.service';

describe('AuditorindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditorindexService = TestBed.get(AuditorindexService);
    expect(service).toBeTruthy();
  });
});
