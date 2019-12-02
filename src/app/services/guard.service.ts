import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser) {
      //if user logged in so return true
      return true;
    }

    //if not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

  constructor(
    private router:Router,
    private authenticationService: AuthenticationService
    ) { }
}
