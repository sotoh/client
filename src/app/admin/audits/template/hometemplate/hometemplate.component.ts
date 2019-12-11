import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, Message } from 'primeng/api';
import { AuditindexService } from '../auditindex.service';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { first } from 'rxjs/operators';
import { AuditIndex, Audit } from 'src/app/models/user';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-hometemplate',
  templateUrl: './hometemplate.component.html',
  styleUrls: ['./hometemplate.component.css'],
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
    ])]
})
export class HometemplateComponent implements OnInit {

 
  audits: Audit[];
  index: AuditIndex;
  cols: any[];
  msgs: Message[] = [];
  error= '';
  rows:number
  response = '';
  loading = false;
  totalRecords: number;
  rowGroupMetadata:any;

  constructor(
    private titleService: RoutenameService,
    private indexService: AuditindexService) { }

  ngOnInit() {
    this.titleService.setTitle('Listado','auditorias');
    this.loading = true;
    this.indexService.index(1)
    .pipe(first())
    .subscribe (resp => {      
      this.audits = resp.data;
      this.totalRecords = parseInt(resp.total);
      console.log(this.audits);
      this.updateRowGroupMetaData()
      this.rows = resp.perPage;
    });
    this.cols = [{},{},{},{}]//<-- Required for the full content of expandibleRow
  }
/*
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.cars) {
        for (let i = 0; i < this.cars.length; i++) {
            let rowData = this.cars[i];
            let brand = rowData.brand;
            if (i == 0) {
                this.rowGroupMetadata[brand] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.cars[i - 1];
                let previousRowGroup = previousRowData.brand;
                if (brand === previousRowGroup)
                    this.rowGroupMetadata[brand].size++;
                else
                    this.rowGroupMetadata[brand] = { index: i, size: 1 };
            }
        }
    }
}*/

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {} ;
    console.log(this.rowGroupMetadata);
    if (this.audits) {
        for (let i = 0; i < this.audits.length; i++) {
            let rowData = this.audits[i];
            let id = rowData.id;
            if (i == 0) {
                this.rowGroupMetadata[id] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.audits[i - 1];
                let previousRowGroup = previousRowData.id;
                if (id === previousRowGroup)
                    this.rowGroupMetadata[id].size++;
                else
                    this.rowGroupMetadata[id] = { index: i, size: 1 };
            }
        }
    }
}
  
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error:' , detail:this.error});
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Completado', detail: this.response});
  }  
  
  loadData(event: LazyLoadEvent) {
    this.loading = true;
    this.indexService.index((event.first + 10)/10)
    .pipe(first())
    .subscribe(resp => {
      this.loading = false;
      this.audits = resp.data;       
      this.totalRecords = parseInt(resp.total);
      this.rows = resp.perPage;
    },error => {
      this.loading = false;
      this.error = 'Algo salio mal al recargar';
      this.showError();
    });
  }
  
  deleteAction(id: number) {   
    this.loading= true; 
    this.indexService.destroy(id)
    .pipe(first())
    .subscribe(data => {
      this.response = data;
      this.audits.splice(this.audits.findIndex(row => row.id === id),1);
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
