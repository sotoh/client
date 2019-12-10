import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EnduserguardService  implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser) {
    if(currentUser.type=='user') {
      //if user logged in so return true
      return true;
    }
    else {
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
      return false;
    }  
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
