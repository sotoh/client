import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-homeauditor',
  templateUrl: './homeauditor.component.html',
  styleUrls: ['./homeauditor.component.css']
})
export class HomeauditorComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Auditor','auditor');
  }

}
