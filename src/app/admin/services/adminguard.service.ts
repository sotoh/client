import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser) {
      console.log('adminguard')
      if(currentUser.type=='admin') {
        console.log('adminguard va a verdadero')
        //if user logged in so return true
        return true;
      }
      else {
        console.log('adminguard va a falso')
        this.router.navigate(['/']);
        return false;
      }  
    }     
    //if not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);    
    return false;
  }

  constructor(
    private router:Router,
    private authenticationService: AuthenticationService
    ) { }
}
