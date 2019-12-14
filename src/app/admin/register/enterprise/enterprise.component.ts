import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message, SelectItem } from 'primeng/components/common/api';
import { EnterpriseoperationsService } from './services/enterpriseoperations.service';
import { Subscription } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { RoutenameService } from 'src/app/components/services/routename.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    //this.subResponse.unsubscribe();
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
    private crudService: EnterpriseoperationsService,
    private titleService: RoutenameService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Empresa','empresa');
    this.enterprise = this.formBuilder.group({
      username: new FormControl('',Validators.required), 
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])), 
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])), 
      rfc: new FormControl('',Validators.required), 
      address: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      industry: new FormControl('',Validators.required)   
    });
    this.industry = [];
    this.industry.push({label:'Selecciona Giro', value:''});
    this.industry.push({label:'Transporte', value:'Transporte'});
    this.industry.push({label:'Turismo', value:'Turismo'});
    this.industry.push({label:'Telecomunicaciones', value:'Telecomunicaciones'});
    this.industry.push({label:'Industrial', value:'Industrial'});
    this.industry.push({label:'Software', value:'Software'});
    this.industry.push({label:'Educacion', value:'Educacion'});
    this.industry.push({label:'Comercio', value:'Comercio'});

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
      console.log('se detuvo');
      console.log(this.enterprise);
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
    .pipe(first()).subscribe(
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
