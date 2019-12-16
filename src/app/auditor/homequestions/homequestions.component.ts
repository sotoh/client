import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ChangeindexService } from './services/changeindex.service';

@Component({
  selector: 'app-homequestions',
  templateUrl: './homequestions.component.html',
  styleUrls: ['./homequestions.component.css']
})
export class HomequestionsComponent implements OnInit, OnDestroy,AfterViewInit ,AfterContentInit{
  ngAfterContentInit(): void {
    
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    this.subIndex.unsubscribe();
  }
  activeIndex:number = 1;
  constructor(private indexService: ChangeindexService) {
    
   }

  subIndex:Subscription;
  items: MenuItem[];

  ngOnInit() {
    this.subIndex = this.indexService.currentIndex
    .subscribe(index => {
      this.activeIndex = index;
    });

    this.items = [
      {label: 'Preguntas'},
      {label: 'Oportunidad de Mejora'},  
      {label: 'Finalizar'}
  ];
  }
}
