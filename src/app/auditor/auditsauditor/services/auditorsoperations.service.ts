import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EnterpriseAudit, Audit, EnterpriseAuditIndex, Question, Answer } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuditorsoperationsService {

  constructor(private http: HttpClient) { }

  audits(auditor:number,page:number) {
    return this.http.get(`${environment.apiUrl}/auditor/audits/${auditor}/${page}`)
    .pipe(map(resp => {
      return <EnterpriseAuditIndex> resp;
    }))
  }

  questions(audit:number, enterprise:number) {
    return this.http.get(`${environment.apiUrl}/auditor/questions/${enterprise}/${audit}`)
    .pipe(map(resp => {
      return <Question[]> resp;
    }))
  }

  answers(answers: Answer[],enterprise:number,audit:number,dateAssign:string) {
    return this.http.post(`${environment.apiUrl}/auditor/audits/answers/store`,{answers: answers, enterprise: enterprise, audit:audit, date: dateAssign},{ responseType: 'text'})
    .pipe(user => {
      return user;
     });
  }
}
