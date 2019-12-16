import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateSubject: BehaviorSubject<string>;
  public date: Observable<string>;
  constructor() {
    this.dateSubject = new BehaviorSubject<string>('');
    this.date = this.dateSubject.asObservable();
   }

   send(date:string) {
    this.dateSubject.next(date);
   }

}
