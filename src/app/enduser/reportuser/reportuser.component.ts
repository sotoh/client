import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-reportuser',
  templateUrl: './reportuser.component.html',
  styleUrls: ['./reportuser.component.css']
})
export class ReportuserComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Reportes','reportes');
  }


}
