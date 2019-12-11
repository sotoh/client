import { Component, OnInit } from '@angular/core';
import { AssignindexService } from './assignindex.service';
import { Auditor, Audit, Enterprise } from 'src/app/models/user';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  constructor(private indexAssign: AssignindexService, 
    private nameService: RoutenameService) { }
  selectedAuditor: Auditor;
  selectedAudit: Audit;
  selectedEnterprise: Enterprise;
  auditors: Auditor[];
  audits:Audit[];
  enterprises: Enterprise[];
  ngOnInit() {
    this.nameService.setTitle('Asignaciones','asignar')
  }


}
