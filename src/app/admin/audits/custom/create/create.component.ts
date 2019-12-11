import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Question } from 'src/app/models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  audits: FormGroup;
  submitted = false;
  blockedPanel: boolean = false;
  msgs: Message[] = [];
  cols:any[];
  error= '';
  response = '';
  dateValue: Date;
  displayDialog: boolean;
  question: Question;
  selectedQuestion: Question;
  questions: Question[];
  newQuestion: boolean;
  options: SelectItem[];
  optionsTwo: SelectItem[];

  constructor(private titleService: RoutenameService,
    private formbuilder: FormBuilder) { }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error:' , detail:this.error});
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Completado', detail: this.response});
  }  

  showDialogToAdd() {
    this.newQuestion = true;
    if(this.questions) {
      this.question = {id: this.questions.length + 1, question:'¿?',type:'Seleccionar', options: null};
    } else {
      this.question = {id: 1, question:'¿?',type:'Seleccionar', options: null};
    }
    this.displayDialog = true;
}

save() {
  if(!this.questions) {
    this.questions = [];
  }  
  if (this.newQuestion) {
    this.questions.push(this.question);
  }    
  else {
    console.log('entrando al else de save');
    //this.questions[this.questions.indexOf(this.selectedQuestion)] = this.question;
    //this.questions.splice(this.questions.findIndex(row => row.id === this.question.id),1);
    let index = this.questions.findIndex(row => row.id === this.question.id)
    this.questions[index] = this.question;
  }
  //this.enterprises.splice(this.enterprises.findIndex(row => row.id === id),1);
  //this.questions = questions;
  this.question = null;
  this.displayDialog = false;
  console.log(this.questions);
}
delete() {
  /*let index = this.cars.indexOf(this.selectedCar);
  this.cars = this.cars.filter((val, i) => i != index);*/
  if(!this.questions) {
    console.log('intento de eliminado');    
  } else {
    this.questions.splice(this.questions.findIndex(row => row.id === this.question.id),1);
  }  
  this.question = null;
  this.displayDialog = false;
}

onRowSelect(event) {
  console.log(event);
    this.newQuestion = false;
    //this.question = this.cloneQuestion(event.data);
    this.question = event.data;
    this.displayDialog = true;
}
  
  clearInputs() {
    this.submitted = false;
    this.audits.reset();
  }

  get fControls() { 
    return this.audits.controls; 
  }

  onSubmit() {

  }

  ngOnInit() {
    this.titleService.setTitle('Crear','crear')
    this.audits = this.formbuilder.group({
      name: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required), 
      gender: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required), 
      company: new FormControl(''),
      memberdate: new FormControl('')
    });
    //option:string;
    //value:number;
    this.options =  [
      {label:'Selecciona', value:null},
      {label:'Check', value:'check'},
      {label:'Rango', value:'range'},
      {label:'Descriptivo', value:'description'},
    ];

    this.optionsTwo =  [
      {label:'Selecciona', value:null},
      {label:'Default', value:'default'},
      {label:'Norma ISO', value:'check'},
    ]

    this.cols = [{},{},{}];
  }

}
