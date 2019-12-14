import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EnterpriseIndex } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseindexService {

  constructor(private http: HttpClient) { }
    
  indexPipe(page:number) {
    return this.http.get(`${environment.apiUrl}/admin/enterprises/${page}`)
    .pipe(map(user => {
     return <EnterpriseIndex> user;
    }));      
  }

  destroy(id:number) {
    return this.http.delete(`${environment.apiUrl}/admin/enterprises/${id}`,{ responseType: 'text'})
    .pipe(resp => {
      return resp
    })
  }
}
