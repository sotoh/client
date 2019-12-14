import { Component, OnInit, ViewEncapsulation, OnDestroy  } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
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
  constructor(private authService: AuthenticationService, private router: Router ) {

   }

  ngOnInit() {
    //switch(this.authService.currentUserValue.type)
    this.subUser = this.authService.currentUser.subscribe(value => {
      this.currentUser = value
      //console.log(value)
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
      this.items = [
        {label: 'Usuarios', icon: 'pi pi-users',url:'admin/usuarios'},
        {label: 'Auditorias', icon: 'pi pi-list', 
        items: [
          {label: 'Crear', icon: 'pi pi-fw pi-plus', url:'admin/crear'},
          {label: 'Ver', icon: 'pi pi-fw pi-table', url:'admin/auditorias'}
      ]},{separator:true},
        {label: 'Auditores', icon: 'pi pi-id-card',url:'admin/auditor'},
        {label: 'Empresas', icon: 'pi pi-th-large',url:'admin/empresa'}
    ];
      break;
      case 'enterprise': 
      this.items = [        
        {label: 'Estadisticas', icon: 'pi pi-chart-line',url:'usuario/perfil'},        
        {label: 'Reportes', icon: 'pi pi-briefcase',url:'usuario/reportes'}
    ]; break;
      case 'auditor':
          this.items = [            
            {label: 'Auditorias', icon: 'pi pi-list', url:'auditor/auditorias'}
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
    this.router.navigate(['/']);
    //this.setLogoutItems();
  }
}
