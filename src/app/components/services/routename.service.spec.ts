import { TestBed } from '@angular/core/testing';

import { RoutenameService } from './routename.service';

describe('RoutenameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutenameService = TestBed.get(RoutenameService);
    expect(service).toBeTruthy();
  });
});
