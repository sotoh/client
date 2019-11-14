import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],  
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {/*
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {separator:true},
              {label: 'Quit'}
          ]
      }
    ];*/
    this.items = [
      {label: 'Estadisticas', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Usuarios', icon: 'fa fa-fw fa-calendar'},
      {label: 'Reportes', icon: 'fa fa-fw fa-book'},
      {label: 'Auditorias', icon: 'fa fa-fw fa-support'},
      {label: 'Empresas', icon: 'fa fa-fw fa-support'}
  ];
  }
  items: MenuItem[];

}
