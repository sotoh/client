import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuditorIndex, EnterpriseIndex, AuditIndex, Enterprise, Audit } from 'src/app/models/user';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AssignindexService {

  constructor(private http: HttpClient) { }
  indexEnterprise(page:number) {
    return this.http.get(`${environment.apiUrl}/admin/enterprises/${page}`)
    .pipe(map(user => {
      return <EnterpriseIndex>user
     }));
  }

  indexAudit(page:number) {
    return this.http.get(`${environment.apiUrl}/admin/audits/${page}`)
    .pipe(map(user => {
     return <AuditIndex>user
    }));
  }

  indexAuditor(page:number) {
  return this.http.get(`${environment.apiUrl}/admin/auditors/${page}`)
    .pipe(map(user => {
     return <AuditorIndex>user
    }));
  }

  subEnterprise(id:number) {
    return this.http.get(`${environment.apiUrl}/admin/auditors/enterprises/${id}`)
    .pipe(map(user => {
     return <Enterprise[]>user
    }));
  }

  assign(auditor:number, enterprise:number) {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    //console.log(formatted_date);
    return this.http.patch(`${environment.apiUrl}/admin/auditors/enterprises/assign/${auditor}`,{enterprise: enterprise, date: formatted_date},{ responseType: 'text'})
    .pipe(user => {
     return user;
    });
  }

  assignAudits(audits:Audit[], enterprise:number,dateAssign:string) {
    let newArray = audits.map(({isCustom,name,questions, ...audits}) => audits)
    return this.http.patch(`${environment.apiUrl}/admin/enterprises/audits/assign/${enterprise}`,{audits: newArray, date: dateAssign},{ responseType: 'text'})
    .pipe(user => {
     return user;
    });
  }
}
