import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditorsoperationsService } from '../auditsauditor/services/auditorsoperations.service';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Answer } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { ArrayService } from './services/array.service';
import { ChangeindexService } from '../homequestions/services/changeindex.service';
import { first } from 'rxjs/operators';
import { DateService } from '../services/date.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-ofi',
  templateUrl: './ofi.component.html',
  styleUrls: ['./ofi.component.css']
})
export class OfiComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.subArray.unsubscribe();
    this.subDate.unsubscribe();
    this.indexService.add(0);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AuditorsoperationsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private arrayService: ArrayService,
    private indexService: ChangeindexService,
    private dateService: DateService) {
      this.indexService.add(1);
     }

  ngOnInit() {
    this.loading = true;
    this.ofiForm = this.formBuilder.group({
      ofi: new FormArray([])
    });
    this.subDate = this.dateService.date
    .subscribe(data =>{
      this.dateAssign = data;
      console.log(this.dateAssign);
    })
    this.subArray = this.arrayService.array
    .subscribe(data =>{
      this.loading = false;
      this.answers = data;
    });
    this.activatedRoute.params.subscribe(params => {
      this.audit =  params['audit'];
      this.enterprise = params['enterprise'];
    });      
    if(this.answers.length == 0 && this.dateAssign.length == 0){
        this.router.navigate(['/auditor/auditorias']);
        this.indexService.add(0);
    } else {
      for (const iterator of this.answers) {
        this.o.push(this.formBuilder.group({
          ofi: ['',Validators.required]
        }));
      }          
    }
  }

  subArray: Subscription;
  subDate: Subscription;
  disabled = true;
  loading = false;
  enterprise :number;
  dateAssign:string;
  audit: number;
  ofiForm: FormGroup;
  answers:Answer[] = []; 
  submitted = false;
  msgs: Message[] = [];
  error = '';
  resp = '';

  //attributes to show data
  selected = 'selected'
  notChecked: boolean = false;
  checked: boolean = true;
  
  get f() { return this.ofiForm.controls; }
  get o() { return this.f.ofi as FormArray; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.ofiForm.invalid) {
      this.loading = false;
      return;
    }
    let index = 0;
    for (const element of  this.answers) {
      console.log(this.ofiForm.value.ofi[index].ofi);      
      this.answers[index].ofi = this.ofiForm.value.ofi[index].ofi;      
      index++;
    }
    console.log(this.answers);
    this.service.answers(this.answers,this.enterprise,this.audit,this.dateAssign)
    .pipe(first())
    .subscribe(resp => {
      this.loading = false;      
      console.log(resp);
      //this.arrayService.send(this.answers);
      this.router.navigate(['auditor/preguntas/finalizar',true]);
    },error => {
      this.error = error;
      console.log(error);
      this.showError();
      this.loading = false;
    })   
  }

showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error', detail:this.error});
}

  singleOfi(index:number):FormGroup {
    return this.o.controls[index] as FormGroup
  }
}
