import { TestBed } from '@angular/core/testing';

import { DashboardFetcherService } from './dashboard-fetcher.service';

describe('DashboardFetcherService', () => {
  let service: DashboardFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
