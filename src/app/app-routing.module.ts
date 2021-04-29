import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './modules/test-component/test-component.component';
import { AppComponent } from './app.component'
const routes: Routes = [
  { path: 'test', component: TestComponentComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
