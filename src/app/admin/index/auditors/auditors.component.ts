import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { AuditorindexService } from './service/auditorindex.service';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { Auditor } from 'src/app/models/user';

@Component({
  selector: 'app-auditors',
  templateUrl: './auditors.component.html',
  styleUrls: ['./auditors.component.css'],
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
export class AuditorsComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.titleService.removeTitle();
  }
  auditors: Auditor[];
  cols:any[];

  constructor(
    private titleService: RoutenameService,
    private nodeService: AuditorindexService
    ) { }

  ngOnInit() {
    this.titleService.setTitle('Auditores','auditores');
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

}
