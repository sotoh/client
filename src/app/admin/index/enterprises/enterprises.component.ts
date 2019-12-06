import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  
  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Empresas','empresas');
  }

}
