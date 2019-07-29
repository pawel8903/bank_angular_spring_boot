import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterTopBarComponent } from './login-register-top-bar/login-register-top-bar.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginRegisterTopBarComponent,
    ResetComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginRegisterModule { }
