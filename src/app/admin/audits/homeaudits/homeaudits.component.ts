import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-homeaudits',
  templateUrl: './homeaudits.component.html',
  styleUrls: ['./homeaudits.component.css']
})
export class HomeauditsComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Auditorias','auditorias')
  }

}
