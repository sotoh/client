import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TreeNode } from 'primeng/api';
import { map } from 'rxjs/operators';
import { AuditorIndex } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuditorindexService {

  constructor(private http: HttpClient) { }
  /*index(page:number) { 
    return this.http.get(`${environment.apiUrl}/admin/auditors/${page}`)
    .toPromise()
      .then(res => <AuditorIndex[]>res)
      .then(data => { return data; });
  }*/

  indexPipe(page:number) {
    return this.http.get(`${environment.apiUrl}/admin/auditors/${page}`)
    .pipe(map(user => {
     return <AuditorIndex>user
    }));      
  }

  destroy(id:number) {
    return this.http.delete(`${environment.apiUrl}/admin/auditors/${id}`,{ responseType: 'text'})
    .pipe(resp => {
      return resp
    })
  }

}
