"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardFetcherService = void 0;
var core_1 = require("@angular/core");
var DashboardFetcherService = /** @class */ (function () {
    function DashboardFetcherService(http) {
        this.http = http;
        this.url = "http://192.168.99.61/grafana/ang/api/";
    }
    DashboardFetcherService.prototype.getDashboard = function (uid) {
        return this.http.get(this.url + ("dashboards/uid/" + uid));
    };
    DashboardFetcherService.prototype.postDashboard = function (dashboard) {
        return this.http.post(this.url + 'dashboards/db', { 'dashboard': dashboard });
    };
    DashboardFetcherService.prototype.getAllDashboard = function () {
        return this.http.get(this.url + 'search');
    };
    DashboardFetcherService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DashboardFetcherService);
    return DashboardFetcherService;
}());
exports.DashboardFetcherService = DashboardFetcherService;
