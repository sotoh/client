import { TestBed } from '@angular/core/testing';

import { ChangeindexService } from './changeindex.service';

describe('ChangeindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeindexService = TestBed.get(ChangeindexService);
    expect(service).toBeTruthy();
  });
});
