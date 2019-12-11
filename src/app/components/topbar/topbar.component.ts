import { Component, OnInit, ViewEncapsulation, OnDestroy  } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],  
})
export class TopbarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subUser.unsubscribe();
  }  
  items: MenuItem[];
  currentUser: User;
  subUser: Subscription;
  constructor(private authService: AuthenticationService) {

   }

  ngOnInit() {
    //switch(this.authService.currentUserValue.type)
    this.subUser = this.authService.currentUser.subscribe(value => {
      this.currentUser = value
      console.log(value)
      if(value) {
        this.setNewItems(value);
      }else {
        this.setLogoutItems();
      }
    })
    if(this.currentUser == null) {
      this.items = [
        {label: 'Inicio', icon: 'pi pi-home', url: '/'},
        {label: 'Inicio de Sesion', icon: 'pi pi-user', url: 'login'},
    ]
    }   
  }

  setNewItems(data:User) {    
    switch(data.type)
    {
      case 'admin': 
      console.log('newadminitems')
      this.items = [
        {label: 'Usuarios', icon: 'pi pi-users',url:'usuarios'},
        {label: 'Auditorias', icon: 'pi pi-list', 
        items: [
          {label: 'Crear', icon: 'pi pi-fw pi-plus', url:'crear'},
          {label: 'Ver', icon: 'pi pi-fw pi-table', url:'auditorias'}
      ]},{separator:true},
        {label: 'Auditores', icon: 'pi pi-id-card',url:'auditor'},
        {label: 'Empresas', icon: 'pi pi-th-large',url:'empresa'}
    ];
      break;
      case 'enterprise': 
      this.items = [        
        {label: 'Estadisticas', icon: 'pi pi-chart-line'},        
        {label: 'Reportes', icon: 'pi pi-briefcase'},
        {label: 'Perfil', icon: 'pi pi-user'}      
    ]; break;
      case 'auditor':
          this.items = [
            {label: 'Perfil', icon: 'pi pi-user'},
            {label: 'Auditorias', icon: 'pi pi-list'}
        ]; break;
      }
  }

  setLogoutItems() {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-home', url: '/'},
      {label: 'Inicio de Sesion', icon: 'pi pi-user', url: 'login'}
  ]
  }

  logoutClick() {
    //this.items = []
    //this.items.push( {label: 'Inicio', icon: 'fa fa-fw fa-bar-chart'},)
    this.authService.logout();
    //this.setLogoutItems();
  }
}
