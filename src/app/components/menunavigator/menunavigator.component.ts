import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RoutenameService } from '../services/routename.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
  selector: 'app-menunavigator',
  templateUrl: './menunavigator.component.html',
  styleUrls: ['./menunavigator.component.css']
})
export class MenunavigatorComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.subTitle.unsubscribe();
    this.subUser.unsubscribe();
  } 
  items: MenuItem[];
  home: MenuItem;
  subTitle:Subscription;
  subUser: Subscription

  constructor(         
    private titleService: RoutenameService,
    private authService: AuthenticationService
    ) {}

  ngOnInit() {
  this.items = [];
  this.subUser = this.authService.currentUser.subscribe(user => {
    if(user) {
      switch(user.type){
        case 'admin':
            this.home = {icon: 'pi pi-home', url:'admin'}; break;
          case 'auditor': 
          this.home = {icon: 'pi pi-home', url:'auditor'}; break;
          case 'enterprise': 
          this.home = {icon: 'pi pi-home', url:'empresa'}; break;
      }
    } else {
      this.home = {icon: 'pi pi-home', url:'/'};  
    }
  });
  this.home = {icon: 'pi pi-home', url:'/'};
  this.subTitle = this.titleService.currentTitle.subscribe(
    data => {
      this.items = data;
    });
  } 
}
