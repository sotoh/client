import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { AuditoroperationsService } from './services/auditoroperations.service';


@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {
  auditor: FormGroup;
  //loading = false;
  submitted = false;
  external = false;
  blockedPanel: boolean = false;
  msgs: Message[] = [];
  error= '';
  selectedType: string;
  types: SelectItem[];
  dateValue: Date;
  constructor(
    private formbuilder: FormBuilder,
    private crudService: AuditoroperationsService    
    ) { }

  ngOnInit() {
    this.auditor = this.formbuilder.group({
      username: new FormControl('',Validators.required), //got
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])), //got
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])), //got
      name: new FormControl('',Validators.required),//got
      lastname: new FormControl('',Validators.required), //got
      gender: new FormControl('',Validators.required),//got
      type: new FormControl('',Validators.required), //got
      company: new FormControl(''),//got
      memberdate: new FormControl('')//got
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
    })
  }

  blockPanel() {
    this.blockedPanel = true;
    setTimeout(() => {
        this.blockedPanel = false;
    }, 3000);
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error' , detail:this.error});
  }  

  onChange(event) {    
    if(event.value=='external') {
      this.external = true;
    } else {
      this.external = false;
    }
  }

  get fControls() { return this.auditor.controls; }

  onSubmit() {
    this.submitted = true;    
    /*if(this.loading) {
      this.loading = false;
    } else {
      this.loading = true;
    }    */
    //stop if form is invalid
    if(this.auditor.invalid) {
      return;
    }
    this.blockedPanel = true;
    
  }

}
