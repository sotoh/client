import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private arraySubject: BehaviorSubject<Answer[]>;
  public array: Observable<Answer[]>;
  constructor() {
    this.arraySubject = new BehaviorSubject<Answer[]>([]);
    this.array = this.arraySubject.asObservable();
   }

   send(values:Answer[]) {
    this.arraySubject.next(values);
   }

   retrieve() {
     
   }

}
