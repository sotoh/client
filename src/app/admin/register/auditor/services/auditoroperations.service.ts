import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditoroperationsService {
  
  constructor(private http: HttpClient) { }
  
storeWithExtra(data) {
  return this.http.post(`${environment.apiUrl}/admin/auditors`,{
    email:data[0],
    username:data[1],
    password:data[2],
    name:data[3],
    lastname:data[4],
    gender:data[5],
    external:data[6],
    company:data[7],
    memberdate:data[8],
  },{ responseType: 'text'})
  .pipe(map(info => {
    return info
  }));
 }

 store(data) {
   console.log('entro')   
  return this.http.post(`${environment.apiUrl}/admin/auditors`,{
    email:data[0],
    username:data[1],
    password:data[2],
    name:data[3],
    lastname:data[4],
    gender:data[5],
    external:data[6],
  },{ responseType: 'text'})
  .pipe(
    map( resp => {
      return resp;
    })
  );
 }
}
