import { TestBed } from '@angular/core/testing';

import { DashboardFetcherService } from './services/dashboard-fetcher.service';

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
