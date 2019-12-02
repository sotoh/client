import { TestBed } from '@angular/core/testing';

import { EnterpriseoperationsService } from './enterpriseoperations.service';

describe('EnterpriseoperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterpriseoperationsService = TestBed.get(EnterpriseoperationsService);
    expect(service).toBeTruthy();
  });
});
