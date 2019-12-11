import { TestBed } from '@angular/core/testing';

import { AuditindexService } from './auditindex.service';

describe('AuditindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditindexService = TestBed.get(AuditindexService);
    expect(service).toBeTruthy();
  });
});
