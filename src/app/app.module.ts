import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodeEditorComponent } from './modules/code-editor/code-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './modules/sidenav/sidenav.component';
import { DemoMaterialModule } from './material-module';
import { TestComponentComponent } from './modules/test-component/test-component.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    SidenavComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(), // use forRoot() in main app module only.
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCardModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}