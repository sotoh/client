import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseoperationsService {

  constructor(private http: HttpClient) { }

 store(data) {
   console.log('entro')   
  return this.http.post(`${environment.apiUrl}/admin/enterprises`,{
    email:data[0],
    username:data[1],
    password:data[2],
    address:data[3],
    rfc:data[4],
    name:data[5],
    industry:data[6],
  },{ responseType: 'text'})
  .pipe(
    map( resp => {
      return resp;
    })
  );
 }

 index() {
   return this.http.get<any>(`${environment.apiUrl}/admin/enterprises`)
   .pipe(map(enterprises => {
    return enterprises;
   }));
 }
}
