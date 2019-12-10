import { TestBed } from '@angular/core/testing';

import { EnterpriseindexService } from './enterpriseindex.service';

describe('EnterpriseindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterpriseindexService = TestBed.get(EnterpriseindexService);
    expect(service).toBeTruthy();
  });
});
