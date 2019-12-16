import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { AuditorsoperationsService } from './services/auditorsoperations.service';
import { Audit, EnterpriseAudit } from 'src/app/models/user';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-auditsauditor',
  templateUrl: './auditsauditor.component.html',
  styleUrls: ['./auditsauditor.component.css']
})
export class AuditsauditorComponent implements OnInit {

  constructor(
    private titleService: RoutenameService,
    private auditService: AuditorsoperationsService,
    private authService: AuthenticationService,
    private router: Router,
    private dateService: DateService
    ) { }
    audits: EnterpriseAudit[];
    auditsRows:number;
    loading = false;
    totalRecords: number;
    
  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle('Auditorias','auditorias');        
  this.auditService.audits(this.authService.currentUserValue.id,1)
  .pipe(first())
  .subscribe(data =>{
    this.loading= false;
    this.audits = data.data;
    this.auditsRows = data.perPage;
    this.totalRecords = parseInt(data.total);
  },error => {
    this.loading= false;
  });
  } 

  navigate(auditId:number, enterpriseId:number, dateassign:string){
    //[routerLink]="['/question', audit.id, audit.enterpriseId]"
    this.dateService.send(dateassign);
    this.router.navigate(['auditor/preguntas',enterpriseId,auditId]);
  }

  loadData(event: LazyLoadEvent) {
    this.loading = true;
    this.auditService.audits(this.authService.currentUserValue.id,(event.first + 10)/10)
    .pipe(first())
    .subscribe(resp => {
      this.loading = false;
      this.totalRecords = parseInt(resp.total);
      this.audits = resp.data;      
      this.auditsRows = resp.perPage;
    },error => {
      this.loading= false;      
    });
  }
}
