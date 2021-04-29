"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var ngx_monaco_editor_1 = require("ngx-monaco-editor");
var code_editor_component_1 = require("./modules/code-editor/code-editor.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var select_1 = require("@angular/material/select");
var flex_layout_1 = require("@angular/flex-layout");
var card_1 = require("@angular/material/card");
var sidenav_component_1 = require("./modules/sidenav/sidenav.component");
var material_module_1 = require("./material-module");
var test_component_component_1 = require("./modules/test-component/test-component.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                code_editor_component_1.CodeEditorComponent,
                sidenav_component_1.SidenavComponent,
                test_component_component_1.TestComponentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ngx_monaco_editor_1.MonacoEditorModule.forRoot(),
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                flex_layout_1.FlexLayoutModule,
                card_1.MatCardModule,
                material_module_1.DemoMaterialModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
