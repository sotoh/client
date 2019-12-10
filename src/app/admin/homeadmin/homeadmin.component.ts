import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
   this.titleService.setonlyTitle('Admin')
  }

}
