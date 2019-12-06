import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Url } from 'url';
import {MenuItem} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RoutenameService {  
  private currentTitleSubject: BehaviorSubject<MenuItem[]>;
  public currentTitle: Observable<MenuItem[]>;
  constructor() {
    this.currentTitleSubject = new BehaviorSubject<MenuItem[]>([]);
    this.currentTitle = this.currentTitleSubject.asObservable();
   }

   /*addTitle(title:string):void {
    this.currentTitleSubject.
   }*/

   setTitle(title: string, address: string) {
     //console.log(this.currentTitleSubject.value);
     this.currentTitleSubject.value.push({label: title, url: address});
     this.currentTitleSubject.next(this.currentTitleSubject.value);
   }

   public get title():MenuItem[] {
     return this.currentTitleSubject.value;
   }
}
