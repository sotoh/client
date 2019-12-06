import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RoutenameService } from '../services/routename.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menunavigator',
  templateUrl: './menunavigator.component.html',
  styleUrls: ['./menunavigator.component.css']
})
export class MenunavigatorComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.subTitle.unsubscribe();
  } 
  items: MenuItem[];
  home: MenuItem;
  subTitle:Subscription;

  constructor(         
    private titleService: RoutenameService
    ) {}

  ngOnInit() {
  this.items = [];
  this.home = {icon: 'pi pi-home', url:'/'};  
this.subTitle = this.subTitle = this.titleService.currentTitle.subscribe(
    data => {
      this.items = data;
    })
  } 
}
