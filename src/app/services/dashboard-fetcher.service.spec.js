"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dashboard_fetcher_service_1 = require("./services/dashboard-fetcher.service");
describe('DashboardFetcherService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(dashboard_fetcher_service_1.DashboardFetcherService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
