import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login-register/login-register.module').then(mod => mod.LoginRegisterModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)/*, canActivate: [AuthGuardService] */},
  { path: '', loadChildren: () => import('./login-register/login-register.module').then(mod => mod.LoginRegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
