import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditoroperationsService {
  
  constructor(private http: HttpClient) { }
  
store() {
  return this.http.post<any>(`${environment.apiUrl}/admin/auditors`,{})
  .pipe(map(info => {
    return info;
  }));
 }

 index() {
   return this.http.get<any>(`${environment.apiUrl}/admin/auditors`)
   .pipe(map(auditors => {
    return auditors
   }));
 }
}
