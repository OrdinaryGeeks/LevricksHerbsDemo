import { TestBed } from '@angular/core/testing';

import { AdminpageService } from './adminpage.service';

describe('AdminpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminpageService = TestBed.get(AdminpageService);
    expect(service).toBeTruthy();
  });
});
