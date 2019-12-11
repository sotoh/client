import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignindexService {

  constructor(private http: HttpClient) { }
  indexEnterprise() {
    return this.http.get(`${environment.apiUrl}/admin/auditor`)
  }

  indexAudit() {

  }

  indexAuditor() {

  }
}
