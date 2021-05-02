"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CentralService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CentralService = /** @class */ (function () {
    function CentralService(_dashboardFetcherService) {
        this._dashboardFetcherService = _dashboardFetcherService;
        this._arrayOfTitlesSource = new rxjs_1.BehaviorSubject([{ 'title': '', 'uid': '' }, { 'title': '', 'uid': '' }]);
        this.arrayOfTitles = this._arrayOfTitlesSource.asObservable();
    }
    CentralService.prototype.loadInitialList = function () {
        this._dashboardFetcherService.getAllDashboard()
            .subscribe(function (res) {
            var filteredResponse = res.filter(function (res) {
                return res.type = 'dash-db';
            });
            return filteredResponse;
        }, function (err) {
            console.log(err);
        });
    };
    CentralService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CentralService);
    return CentralService;
}());
exports.CentralService = CentralService;
