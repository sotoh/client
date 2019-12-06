import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-auditsauditor',
  templateUrl: './auditsauditor.component.html',
  styleUrls: ['./auditsauditor.component.css']
})
export class AuditsauditorComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Auditorias','auditorias');
  }

}
