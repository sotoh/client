import { Component,ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from './auth/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auditorias'; 

  constructor(private authService: AuthenticationService,private router: Router) {
    /*if(authService.currentUserValue) {
      switch(this.authService.currentUserValue.type) {
        case 'admin':
          this.router.navigate(['/admin']); break;
        case 'auditor': 
          this.router.navigate(['/auditor']); break;
        case 'enterprise': 
          this.router.navigate(['/empresa']);break;
      }
    } */
  }  
}
