import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuditIndex } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditindexService {

  constructor(private http:HttpClient) { }
  index(page:number) { 
    return this.http.get(`${environment.apiUrl}/admin/audits/${page}`)
    .pipe(map(user => {
      return <AuditIndex>user;
     })); 
  }

  destroy(id:number) {
    return this.http.delete(`${environment.apiUrl}/admin/audits/${id}`,{ responseType: 'text'})
    .pipe(resp => {
      return resp;
    })
  }

}