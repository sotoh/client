import { TestBed } from '@angular/core/testing';

import { MovedataService } from './movedata.service';

describe('MovedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovedataService = TestBed.get(MovedataService);
    expect(service).toBeTruthy();
  });
});
