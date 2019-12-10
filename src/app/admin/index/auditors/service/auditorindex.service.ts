import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuditorindexService {

  constructor(private http: HttpClient) { }
  index() { 
    return this.http.get(`${environment.apiUrl}/admin/auditors`)
    .toPromise()
    .then(resp => {<TreeNode[]>resp})
    /*
    getFilesystem() {
        return this.http.get('showcase/resources/data/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
     */
  }

}
