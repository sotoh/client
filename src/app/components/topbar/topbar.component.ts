import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],  
})
export class TopbarComponent implements OnInit {  
  items: MenuItem[];
  user= 'foreign';
  currentUser: User;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    //switch(this.authService.currentUserValue.type)
    switch(this.user)
    {
      case 'admin': 
      this.items = [
        {label: 'Inicio', icon: 'fa fa-fw fa-bar-chart'},
        {label: 'Usuarios', icon: 'fa fa-fw fa-calendar'},
        {label: 'Reportes', icon: 'fa fa-fw fa-book'},
        {label: 'Auditorias', icon: 'fa fa-fw fa-support'},
        {label: 'Empresas', icon: 'fa fa-fw fa-support'}
    ];
      break;
      case 'enterprise': 
      this.items = [        
        {label: 'Estadisticas', icon: 'fa fa-fw fa-bar-chart'},        
        {label: 'Reportes', icon: 'fa fa-fw fa-book'},
        {label: 'Perfil', icon: 'fa fa-fw fa-support'}        
    ]; break;
      case 'auditor':
          this.items = [
            {label: 'Inicio', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Perfil', icon: 'fa fa-fw fa-book'},
            {label: 'Auditorias', icon: 'fa fa-fw fa-support'}
        ]; break;
      default: this.items = [
        {label: 'Inicio', icon: 'pi pi-home', url: '/'},
        {label: 'Inicio de Sesion', icon: 'pi pi-user', url: 'login'},
        {label: 'Acerca', icon: 'pi pi-info',url: 'acerca'}
    ];break;
    }   
  }
}
