import { TestBed } from '@angular/core/testing';

import { AuditorsoperationsService } from './auditorsoperations.service';

describe('AuditorsoperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditorsoperationsService = TestBed.get(AuditorsoperationsService);
    expect(service).toBeTruthy();
  });
});
