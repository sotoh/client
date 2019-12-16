import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeindexService } from '../homequestions/services/changeindex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    
    this.indexService.add(0);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private indexService: ChangeindexService,
    private router: Router) {
    this.indexService.add(2);
   }
   finish = false;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.finish =  params['status'];      
    });
    
    if(!this.finish){
      this.router.navigate(['/auditor/auditorias']);
        this.indexService.add(0);
    }    
  }

  changeLink() {
    this.router.navigate(['/auditor/auditorias']);
  }

}
