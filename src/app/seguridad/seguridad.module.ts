import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

export const SeguridadRoutes: Routes = [{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SeguridadRoutes)
  ]
})
export class SeguridadModule { }
