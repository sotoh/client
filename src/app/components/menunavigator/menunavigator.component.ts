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
      {label:'Sports'},
      {label:'Football'},
      {label:'Countries'},
      {label:'Spain'},
      {label:'F.C. Barcelona'},
      {label:'Squad'},
      {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'}
  ];
  
  this.home = {icon: 'pi pi-home'};

  }

}
