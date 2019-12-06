import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-profileauditor',
  templateUrl: './profileauditor.component.html',
  styleUrls: ['./profileauditor.component.css']
})
export class ProfileauditorComponent implements OnInit {

  constructor(private titleService: RoutenameService) { }

  ngOnInit() {
    this.titleService.setTitle('Perfil','perfil');
  }

}
