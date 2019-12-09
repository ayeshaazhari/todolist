import { TestBed } from '@angular/core/testing';

import { GoogleplusloginService } from './googlepluslogin.service';

describe('GoogleplusloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleplusloginService = TestBed.get(GoogleplusloginService);
    expect(service).toBeTruthy();
  });
});
