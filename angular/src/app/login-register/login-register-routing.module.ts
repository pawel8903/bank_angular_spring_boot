import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterTopBarComponent } from './login-register-top-bar/login-register-top-bar.component';

const routes: Routes = [
  { path: '', component: LoginRegisterTopBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
