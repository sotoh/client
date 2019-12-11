import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuditsoperationService {

  constructor(private http:HttpClient) { }
  
  store(name:string, questions:Question[]) {
    let newArray = questions.map(({id, ...questions}) => questions)
    return this.http.post(`${environment.apiUrl}/admin/audits`,{
      name:name,
      questions: newArray
    },{ responseType: 'text'})
    .pipe(info => {return info});
  }

  index() {

  }

  destroy() {

  }
}
