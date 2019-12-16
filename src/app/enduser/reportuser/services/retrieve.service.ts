import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EnterpriseAuditIndex } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private http: HttpClient) { }

  score(idEnterprise: number, dateAudit: string, idAudit:number) {
    let params = new HttpParams().set("date",dateAudit).set("audit", idAudit.toString());
    return this.http.get(`${environment.apiUrl}/enterprise/score/${idEnterprise}`,{params: params })
    .pipe(map (resp => {
      return <number>resp;
    }));
  }

  audits (enterprise:number,page:number) {
    return this.http.get(`${environment.apiUrl}/enterprise/audits/${enterprise}/${page}`)
    .pipe(map(resp => {
      return <EnterpriseAuditIndex> resp;
    }))
  }

  ofi(idEnterprise: number, dateAudit: string, idAudit:number) {
    let params = new HttpParams().set("date",dateAudit).set("audit", idAudit.toString());
    return this.http.get(`${environment.apiUrl}/enterprise/ofi/${idEnterprise}`,{params: params })
    .pipe(map (resp => {
      return resp;
    }));
  }
}
