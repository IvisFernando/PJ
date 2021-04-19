import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialIndexComponent } from './components/financial-index/financial-index.component';
import { FinancialFormComponent } from './components/financial-form/financial-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'financial-index', pathMatch: 'full' },
  { path: 'financial-index', component: FinancialIndexComponent },
  { path: 'financial-form', component: FinancialFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
