import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { RetrieveService } from '../reportuser/services/retrieve.service';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { first } from 'rxjs/operators';
import { EnterpriseAudit } from 'src/app/models/user';
import { LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { MovedataService } from '../homeuser/services/movedata.service';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.css']
})
export class ProfileuserComponent implements OnInit {

  loading = false;
  auditsRows:number;
  audits: EnterpriseAudit[];
  totalRecords: number;

  constructor(
    private titleService: RoutenameService,
    private retrieveService: RetrieveService,
    private authService: AuthenticationService,
    private router: Router,
    private shareService: MovedataService
    ) { }


  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle('Resultados','resultados');

    this.retrieveService.audits(this.authService.currentUserValue.id, 1)
    .pipe(first())
    .subscribe(resp => {
      this.loading = false;
      this.totalRecords = parseInt(resp.total);
      this.audits = resp.data;      
      this.auditsRows = resp.perPage;
    },error => {
      this.loading = false;
    });
  }

  
  loadData(event: LazyLoadEvent) {
    this.loading = true;
    this.retrieveService.audits(this.authService.currentUserValue.id,(event.first + 10)/10)
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

  moveon(auditId:number, enterpriseId:number, dateassign:string){
    //[routerLink]="['/question', audit.id, audit.enterpriseId]"
    //Share Date and enterprise
    this.shareService.send(enterpriseId,dateassign);
    this.router.navigate(['usuario/reportes',auditId]);
  }

}
