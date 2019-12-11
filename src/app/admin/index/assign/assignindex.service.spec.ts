import { TestBed } from '@angular/core/testing';

import { AssignindexService } from './assignindex.service';

describe('AssignindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignindexService = TestBed.get(AssignindexService);
    expect(service).toBeTruthy();
  });
});
