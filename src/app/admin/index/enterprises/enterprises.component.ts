import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.titleService.removeTitle();
  }
  
  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Empresas','empresas');
  }

}
