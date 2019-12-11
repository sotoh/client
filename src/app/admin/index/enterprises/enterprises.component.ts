import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { Enterprise, EnterpriseIndex } from 'src/app/models/user';
import { Message, LazyLoadEvent } from 'primeng/components/common/api';
import { EnterpriseindexService } from './service/enterpriseindex.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class EnterprisesComponent implements OnInit, OnDestroy {

  enterprises: Enterprise[];
  index: EnterpriseIndex
  cols:any[];
  msgs: Message[] = [];
  error= '';
  rows:number
  response = '';
  loading = false;
  totalRecords: number;
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.titleService.removeTitle();
  }
  
  constructor(private titleService: RoutenameService,
    private indexService: EnterpriseindexService) { }

  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle('Empresas','empresas');
    this.indexService.indexPipe(1)
    .pipe(first())
    .subscribe(resp => {
       this.loading = false;
       this.enterprises = resp.data;       
       this.totalRecords = parseInt(resp.total);       
       this.rows = resp.perPage;
       console.log(this.enterprises)
    });
    this.cols = [{},{},{},{}]//<-- Required for the full content of expandibleRow
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error:' , detail:this.error});
  }

  loadData(event: LazyLoadEvent) {
    this.loading = true;
    this.indexService.indexPipe((event.first + 10)/10)
    .pipe(first())
    .subscribe(resp => {
      this.loading = false;
      this.enterprises = resp.data;       
      this.totalRecords = parseInt(resp.total);
      this.rows = resp.perPage;
    },error => {
      this.loading = false;
      this.error = 'Algo salio mal al recargar';
      this.showError();
    });
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Completado', detail: this.response});
  }  

  deleteAction(id: number) {   
    this.loading= true; 
    this.indexService.destroy(id)
    .pipe(first())
    .subscribe(data => {
      this.response = data;
      this.enterprises.splice(this.enterprises.findIndex(row => row.id === id),1);
      this.showSuccess();
      this.loading= false;
    },error => {
      console.log(error);
      this.error = error;
      this.showError();
      this.loading= false;
    })
  }

}
