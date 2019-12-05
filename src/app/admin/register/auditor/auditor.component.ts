import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { AuditoroperationsService } from './services/auditoroperations.service';
import { first, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subResponse.unsubscribe();
    this.subRespExtra.unsubscribe();
  }
  subResponse: Subscription;
  subRespExtra: Subscription;
  auditor: FormGroup;
  submitted = false;
  external = false;
  blockedPanel: boolean = false;
  msgs: Message[] = [];
  error= '';
  response = '';
  selectedType: string;
  types: SelectItem[];
  dateValue: Date;
  constructor(
    private formbuilder: FormBuilder,
    private crudService: AuditoroperationsService    
    ) { }

  ngOnInit() {
    this.auditor = this.formbuilder.group({
      username: new FormControl('',Validators.required), 
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])), 
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])), 
      name: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required), 
      gender: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required), 
      company: new FormControl(''),
      memberdate: new FormControl('')
    });
    this.types = [];
    this.types.push({label:'Selecciona Tipo', value:''});
    this.types.push({label:'Interno', value:'internal'});
    this.types.push({label:'Externo', value:'external'});

    this.fControls.type.valueChanges.subscribe(value => {      
      if(value=='external') {
        this.fControls.company.setValidators(Validators.required);
        this.fControls.memberdate.setValidators(Validators.required);
      } else {        
        this.fControls.company.setValidators(null);
        this.fControls.memberdate.setValidators(null);
      }
      this.auditor.updateValueAndValidity();
    });
    //console.log(this.fControls);
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error:' , detail:this.error});
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Completado', detail: this.response});
  }  

  onChange(event) {    
    if(event.value=='external') {
      this.external = true;      
    } else {
      this.external = false;
      this.fControls['memberdate'].setErrors(null);
      this.fControls['memberdate'].updateValueAndValidity();
      this.fControls['company'].setErrors(null);
      this.fControls['company'].updateValueAndValidity();
    }
  }

  clearInputs() {
    this.submitted = false;
    this.auditor.reset();
  }

  get fControls() { 
    return this.auditor.controls; 
  }

  onSubmit() {
    this.submitted = true;
    //stop if form is invalid
    if(this.auditor.invalid) {
      return;
    }
    if(this.external) {
      this.blockedPanel = true;
      let data = [
        this.fControls.email.value,
        this.fControls.username.value,        
        this.fControls.password.value,
        this.fControls.name.value,
        this.fControls.lastname.value,
        this.fControls.gender.value,
        this.fControls.type.value,
        this.fControls.company.value,
        this.fControls.memberdate.value,
      ];
     this.subRespExtra = this.crudService.storeWithExtra(data)
      .pipe(tap())
      .subscribe(data => {
        this.response = data;
        this.showSuccess();
        this.clearInputs();
        this.external = false;
        this.blockedPanel = false;
      },
      error => {
        this.blockedPanel = false;
        this.error = error.error;
        this.showError();
      });
    } else {
      this.blockedPanel = true;
      let data = [
        this.fControls.email.value,
        this.fControls.username.value,        
        this.fControls.password.value,
        this.fControls.name.value,
        this.fControls.lastname.value,
        this.fControls.gender.value,
        this.fControls.type.value
      ];
     this.subResponse =  this.crudService.store(data)
      .pipe(tap())
      .subscribe(data => {
        this.response = data;
        this.showSuccess();
        this.clearInputs();
        this.blockedPanel = false;
      },
      error => {
        this.blockedPanel = false;
        this.error = error.error;
        this.showError();
      });
    }
  }
}
