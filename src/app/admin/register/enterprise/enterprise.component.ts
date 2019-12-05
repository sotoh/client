import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message, SelectItem } from 'primeng/components/common/api';
import { EnterpriseoperationsService } from './services/enterpriseoperations.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subResponse.unsubscribe();
  }
  subResponse: Subscription;
  enterprise: FormGroup;
  submitted = false;
  blockedPanel: boolean = false;
  msgs: Message[] = [];
  error= '';
  response = '';
  industry: SelectItem[];
  constructor(
    private formBuilder: FormBuilder,
    private crudService: EnterpriseoperationsService 
  ) { }

  ngOnInit() {
    this.enterprise = this.formBuilder.group({
      username: new FormControl('',Validators.required), 
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])), 
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])), 
      rfc: new FormControl('',Validators.required), 
      address: new FormControl('',Validators.required), 
      phonenumber: new FormControl('',Validators.required), 
      name: new FormControl('',Validators.required),
      industry: new FormControl('',Validators.required)   
    });
    this.industry = [];
    this.industry.push({label:'Selecciona Giro', value:''});
    this.industry.push({label:'Transporte', value:'transport'});
    this.industry.push({label:'Turismo', value:'tourism'});
    this.industry.push({label:'Telecomunicaciones', value:'telco'});
    this.industry.push({label:'Industrial', value:'industry'});
    this.industry.push({label:'Software', value:'software'});
    this.industry.push({label:'Educacion', value:'education'});
    this.industry.push({label:'Comercio', value:'commerce'});

  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error' , detail:this.error});
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Completado', detail: this.response});
  }  

  clearInputs() {
    this.submitted = false;
    this.enterprise.reset();
  }

  get fControls() { 
    return this.enterprise.controls; 
  }

  onSubmit() {
    this.submitted = true;
    //stop if form is invalid
    if(this.enterprise.invalid) {
      return;
    }
    this.blockedPanel = true;
    let data = [
      this.fControls.email.value,
      this.fControls.username.value,        
      this.fControls.password.value,    
      this.fControls.address.value,
      this.fControls.rfc.value,
      this.fControls.name.value,
      this.fControls.industry.value,
    ];
    this.subResponse = this.crudService.store(data)
    .pipe(tap()).subscribe(
      data => {
      this.response = data;
      this.showSuccess();
      this.clearInputs();
      this.blockedPanel = false
    },
    error =>{
      this.blockedPanel = false;
      this.error = error;
      this.showError();
    })
  }

}
