import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AssignindexService } from './assignindex.service';
import { Auditor, Audit, Enterprise, AuditIndex, AuditorIndex, EnterpriseIndex } from 'src/app/models/user';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { first } from 'rxjs/operators';
import {MessageService, Message} from 'primeng/api';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
  providers: [MessageService],
})
export class AssignComponent implements OnInit 
  {

  constructor(private indexAssign: AssignindexService, 
    private nameService: RoutenameService,
    private messageService: MessageService) { }
  
    //Audit variables
  selectedAudit: Audit = null;
  auditIndex: AuditIndex;
  auditPaginator = 1;
  auditRows;
  totalAudits;
  audits:Audit[];
  targetAudits: Audit[];

  //Auditor variables
  selectedAuditor: Auditor;
  auditorIndex:AuditorIndex;
  auditors: Auditor[];
  auditorPaginator = 1;
  auditorRows;
  totalAuditors;
  
  //Enterprise variables
  selectedEnterprise: Enterprise;
  enterpriseIndex: EnterpriseIndex;
  enterprises: Enterprise[];
  enterprisePaginator = 1;
  totalEnterprises;
  enterpriseRows;
  enterpriseIdSelected;

  //Query
  auditorEnterprises: Enterprise[];

  error= '';
  response = '';
  warning = '';
  info = '';
  dateValue: Date;
  blocked = true;
  blockedPanel = false;
  msgs: Message[] = [];

  ngOnInit() {
    this.targetAudits = [];
    this.nameService.setTitle('Asignaciones','asignar')
    this.loadAuditors(1);
    this.loadAudits(1);
    this.loadEnterprises(1);
  }

  paginateEnterprises(event){
    //console.log(event);    
    this.loadEnterprises(event.page+1);
  }

  paginateAuditors(event){
    this.loadAuditors(event.page+1);
  }

  showSuccess() {
    this.messageService.add({key: 'tc', severity:'success', summary: 'Terminado', detail:this.response});
  }

  showWarn() {
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Advertencia', detail:this.warning});
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Informacion: ', detail:this.info });
  }

  showError() {
    this.messageService.add({key: 'tc', severity:'error', summary: 'Mensaje de Error', detail:this.error});
  }

  loadEnterprises(id:number) {
    this.indexAssign.indexEnterprise(id)
    .pipe(first())
    .subscribe(data => {
      this.enterpriseIndex = data;
      this.totalEnterprises = data.total;
      this.enterprises = data.data;
      this.enterpriseRows = data.perPage
    })
  }

  loadAuditors(id:number) {
    this.indexAssign.indexAuditor(id)
    .pipe(first())
    .subscribe(data => {
      this.auditorIndex = data;
      this.totalAuditors = data.total;
      this.auditors = data.data;
      this.auditorRows = data.perPage;
    })
  }

  loadAudits(id:number) {
    this.indexAssign.indexAudit(id)
    .pipe(first())
    .subscribe(data => {
      this.auditIndex = data;
      this.totalAudits = data.total;
      this.auditRows = data.perPage;
      this.audits = data.data;
      console.log(this.audits);
    })
  }

  changeAuditor(event){
    //console.log(event.value[0])
    this.blocked = true;
    this.selectedAuditor = event.value[0];
    this.indexAssign.subEnterprise(event.value[0].id)
    .pipe(first())
    .subscribe(data => {
      this.auditorEnterprises = data;      
      if(this.auditorEnterprises.length == 0) {this.info = 'El Auditor no tiene empresa asignada'; this.showInfo();}
    });
  }

  refillTable(id:number) {
      this.indexAssign.subEnterprise(id)
    .pipe(first())
    .subscribe(data => {
      this.auditorEnterprises = data;
      if(this.auditorEnterprises.length == 0) {this.info = 'El Auditor no tiene empresa asignada'; this.showInfo();}
    });
  }

  selection(id:number) {
    //console.log(id);
    //console.log(this.selectedAuditor);
   if(this.selectedAuditor && id != 0) {
    this.enterpriseIdSelected = id;
      this.blocked = false;
    } else {
      this.blocked = true;
    }
  }

  submitAudits() {
    this.blockedPanel = true;
    if(this.targetAudits) {
      if(this.targetAudits.length >= 1) {
        if(this.dateValue) {           
          let formatted_date = this.dateValue.getDate() + "-" + (this.dateValue.getMonth() + 1) + "-" + this.dateValue.getFullYear();
          console.log(formatted_date);
          this.indexAssign.assignAudits(this.targetAudits,this.enterpriseIdSelected,formatted_date)
          .pipe(first())
          .subscribe(resp => {
            this.blockedPanel = false;
            this.response = resp;
            this.showSuccess();
            this.blocked = true
          },error => {
            this.blockedPanel = false;
            this.blocked = true;
            this.warning = error.error;
            this.showWarn();
          });
          //console.log()
        } else {
          //If undefined
          this.error = 'Seleccione la Fecha';
          this.showError();
          //console.log(this.dateValue)
        }
      } else {
        this.error = 'Debe seleccionar almenos una auditoría';
        this.showError();
      }
    }
  }

  changeEnterprise(event) {
    this.selectedEnterprise = event.value[0];
    if(this.selectedAuditor) {
      this.indexAssign.assign(this.selectedAuditor.id,event.value[0].id)
      .pipe(first())
      .subscribe(resp => {
        this.response = resp;
        this.showSuccess();
        this.refillTable(this.selectedAuditor.id);
      },error=>{
        this.error = error.error;
        this.showError();
      }) 
    } else {
      //When undefined
      this.error = 'Seleccione un Auditor Primero';
      this.showError();
    }
  }

}
