import { Component,ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngclient'; 
  constructor() {    
  }    
}
