import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EnterpriseAudit, Audit, EnterpriseAuditIndex, Question } from 'src/app/models/user';

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

  questions(audit:number) {
    return this.http.get(`${environment.apiUrl}/auditor/questions/${audit}`)
    .pipe(map(resp => {
      return <Question[]> resp;
    }))
  }

  answers() {

  }
}
