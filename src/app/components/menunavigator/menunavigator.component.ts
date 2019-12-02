import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menunavigator',
  templateUrl: './menunavigator.component.html',
  styleUrls: ['./menunavigator.component.css']
})
export class MenunavigatorComponent implements OnInit {

  items: MenuItem[];
  home: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Categories'},
      
  ];
  
  this.home = {icon: 'pi pi-home'};

  }

}
