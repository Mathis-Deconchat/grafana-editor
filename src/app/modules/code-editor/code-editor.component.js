"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CodeEditorComponent = void 0;
var core_1 = require("@angular/core");
var sql_formatter_1 = require("sql-formatter");
var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent(DashboardFetcherService, MonacoEditorModule) {
        this.DashboardFetcherService = DashboardFetcherService;
        this.MonacoEditorModule = MonacoEditorModule;
        this.targetIndex = 0;
        this.panelIndex = 0;
        this.i = 0;
        this.editorOptions = { theme: 'vs-dark', language: 'sql' };
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DashboardFetcherService.getDashboard(this.uid)
            .subscribe(function (response) {
            console.log(response);
            _this.dashboard = response;
            _this.code = sql_formatter_1.format(_this.dashboard.dashboard.panels[_this.panelIndex].targets[_this.targetIndex].rawSql, {
                uppercase: true
            });
            _this.title = _this.dashboard.dashboard.panels[_this.panelIndex].title;
        });
    };
    CodeEditorComponent.prototype.savePanel = function () {
        var _this = this;
        var _a;
        if (this.dashboard) {
            var version = (_a = this.dashboard) === null || _a === void 0 ? void 0 : _a.dashboard.version;
            var copyOfDashboard_1 = this.dashboard;
            copyOfDashboard_1.dashboard.panels[this.panelIndex].targets[this.targetIndex].rawSql = this.code;
            copyOfDashboard_1.dashboard.version = this.dashboard.dashboard.version;
            console.log('Version:' + copyOfDashboard_1.dashboard.version);
            console.log(copyOfDashboard_1);
            this.DashboardFetcherService.postDashboard(copyOfDashboard_1.dashboard)
                .subscribe(function (res) { console.log(res); }, function (err) {
                copyOfDashboard_1.dashboard.version = copyOfDashboard_1.dashboard.version + 1;
                _this.DashboardFetcherService.postDashboard(copyOfDashboard_1.dashboard)
                    .subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
            });
            this.i = 1;
        }
    };
    CodeEditorComponent.prototype.resetPanel = function () {
        var storedCurrentDashboard = localStorage.getItem('currentDashBoard');
        if (storedCurrentDashboard) {
            var currentDashboard = JSON.parse(storedCurrentDashboard);
            this.code = sql_formatter_1.format(currentDashboard.dashboard.panels[this.panelIndex].targets[this.targetIndex].rawSql, {
                uppercase: true
            });
        }
    };
    CodeEditorComponent.prototype.onInit = function (editor) {
        editor.getAction('editor.action.formatDocument').run();
    };
    __decorate([
        core_1.Input()
    ], CodeEditorComponent.prototype, "uid");
    __decorate([
        core_1.Input()
    ], CodeEditorComponent.prototype, "targetIndex");
    __decorate([
        core_1.Input()
    ], CodeEditorComponent.prototype, "panelIndex");
    CodeEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-code-editor',
            templateUrl: './code-editor.component.html',
            styleUrls: ['./code-editor.component.css']
        })
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());
exports.CodeEditorComponent = CodeEditorComponent;
