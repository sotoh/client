import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-homequestions',
  templateUrl: './homequestions.component.html',
  styleUrls: ['./homequestions.component.css']
})
export class HomequestionsComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {label: 'Preguntas'},
      {label: 'Oportunidad de Mejora'},  
      {label: 'Evaluar'}
];
  }

}
