import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationStart } from '@angular/router';
import { UserService } from './login-register/user.service';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  subscription: Subscription;

  constructor(public userService: UserService, private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      console.log(event)
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isValid()) {
      return true;
    } else {
      console.log(browserRefresh)
      if (browserRefresh) {
        this.userService.changeValidation();
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }
}
