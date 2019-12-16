import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { Result, Share } from 'src/app/models/user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RetrieveService } from './services/retrieve.service';
import { Subscription } from 'rxjs';
import { MovedataService } from '../homeuser/services/movedata.service';
import { first } from 'rxjs/operators';
declare var jsPDF: any;

@Component({
  selector: 'app-reportuser',
  templateUrl: './reportuser.component.html',
  styleUrls: ['./reportuser.component.css']
})
export class ReportuserComponent implements OnInit {
  
  results: any;
  shareData: Share;
  subShareObject: Subscription;
  columns: any[];
  data: any;
  value:number;
  auditId:number;

  constructor(
    private titleService: RoutenameService,
    private activatedRoute: ActivatedRoute,
    private retrieveService: RetrieveService,
    private shareService: MovedataService,
    private router: Router) {
   }

  ngOnInit() {
    this.titleService.setTitle('Reportes','reportes');
    this.activatedRoute.params.subscribe(params => {
    this.auditId =  params['id'];      
  });
   this.subShareObject =  this.shareService.myarray
   .subscribe(data => {
    this.shareData = data;
   })
   if(this.shareData == null) {
    //Si no hay datos
    this.router.navigate(['usuario/resultados']);
   }else {
    this.retrieveService.score(this.shareData.enterprise,this.shareData.dateAudit,this.auditId)
    .pipe(first())
    .subscribe(score => {
      this.value = score;
    });
    this.retrieveService.ofi(this.shareData.enterprise,this.shareData.dateAudit,this.auditId)
    .pipe(first())
    .subscribe( ofi => {
      console.log(ofi);
      this.results = ofi;
    });
   }
  }

  exportPdf() {
    import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
            doc.autoTable(this.columns, this.results);
            doc.save('primengTable.pdf');
        })
  }

}
