import { TestBed } from '@angular/core/testing';

import { SiteFrameworksService } from './site-frameworks.service';

describe('SiteFrameworksService', () => {
  let service: SiteFrameworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteFrameworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
