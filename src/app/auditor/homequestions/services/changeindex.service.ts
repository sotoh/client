import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {MenuItem} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ChangeindexService {
  private currentIndexSubject: BehaviorSubject<number>;
  public currentIndex: Observable<number>;
  constructor() {
    this.currentIndexSubject = new BehaviorSubject<number>(0);
    this.currentIndex = this.currentIndexSubject.asObservable();
   }

   add(newValue: number) {
    this.currentIndexSubject.next(newValue);
   }

   remove () {
    
   }
}
