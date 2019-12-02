import { TestBed } from '@angular/core/testing';

import { EnduserguardService } from './enduserguard.service';

describe('EnduserguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnduserguardService = TestBed.get(EnduserguardService);
    expect(service).toBeTruthy();
  });
});
