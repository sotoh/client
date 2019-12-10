import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subUser.unsubscribe();
  }
  subUser: Subscription;
  currentUser: User;
  text = 'Sistema hecho con amor';
  constructor(private authService: AuthenticationService) { }

    ngOnInit() {
      this.subUser = this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
      })
      if(this.currentUser) {
        switch(this.currentUser.type){
          case 'admin': 
          this.text = `Administrador`
          break;
          case 'enterprise': 
          this.text = `Usuario:`
          break;
          case 'auditor': 
          this.text = `Auditor`
          break;
        }
      }
  }

}
