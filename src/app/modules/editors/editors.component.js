"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditorsComponent = void 0;
var core_1 = require("@angular/core");
var EditorsComponent = /** @class */ (function () {
    function EditorsComponent(DashboardFetcherService) {
        this.DashboardFetcherService = DashboardFetcherService;
        this.arrayOfDashboard = [];
        this.selectedDashboard = '';
        this.arrayOfPanels = [];
        this.arrayOfTitles = [];
    }
    EditorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DashboardFetcherService.getAllDashboard()
            .subscribe(function (response) {
            var filteredResponse = response.filter(function (response) {
                return response.type = 'dash-db';
            });
            _this.arrayOfDashboard = filteredResponse;
        });
    };
    EditorsComponent.prototype.changeSelect = function (event) {
        this.loadJson(event.value);
    };
    EditorsComponent.prototype.loadJson = function (uid) {
        var _this = this;
        this.arrayOfPanels = [];
        this.DashboardFetcherService.getDashboard(uid)
            .subscribe(function (response) {
            _this.dashboard = response;
            localStorage.clear();
            localStorage.setItem('currentDashBoard', JSON.stringify(_this.dashboard));
            response === null || response === void 0 ? void 0 : response.dashboard.panels.map(function (e, i) {
                var _a;
                var arrayOfSql = [];
                var title = e.title;
                (_a = e.targets) === null || _a === void 0 ? void 0 : _a.map(function (v) {
                    arrayOfSql.push(v.rawSql);
                });
                _this.arrayOfTitles.push(title);
                var panelObject = {
                    'id': i,
                    'title': title,
                    'sql': arrayOfSql
                };
                _this.arrayOfPanels.push(panelObject);
            });
        });
    };
    EditorsComponent = __decorate([
        core_1.Component({
            selector: 'app-editors',
            templateUrl: './editors.component.html',
            styleUrls: ['./editors.component.css']
        })
    ], EditorsComponent);
    return EditorsComponent;
}());
exports.EditorsComponent = EditorsComponent;
// let arrayOfSql = [];
// response?.dashboard?.panels?.map(e => {
//  e.targets[0].
// })
// let dashboardObject: Dashboard = {
//   dashboard: {
//     uid: uid,
//     title: response?.dashboard?.title,
//     // panels: [{
//     //   sql: response?.dashboard?.panels?.rawsql
//     // }]
//   },
// };
// response?.dashboard?.
// this.dashboard = dashboardObject;
// console.log(uid)
