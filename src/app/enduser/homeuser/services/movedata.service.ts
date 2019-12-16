import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Share } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MovedataService {
  private myarraySubject: BehaviorSubject<Share>;
  public myarray: Observable<Share>;
  constructor() {
    this.myarraySubject = new BehaviorSubject<Share>(null);
    this.myarray = this.myarraySubject.asObservable();
   }

   send(enterpriseId:number, auditDate: string) {
     this.myarraySubject.next({enterprise: enterpriseId, dateAudit: auditDate})
   }
}
