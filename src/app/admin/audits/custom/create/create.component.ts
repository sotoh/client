import { Component, OnInit } from '@angular/core';
import { RoutenameService } from 'src/app/components/services/routename.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Question } from 'src/app/models/user';
import { AuditsoperationService } from '../../service/auditsoperation.service';
import { first } from 'rxjs/operators';

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
  remainoptions = false;

  constructor(private titleService: RoutenameService,
    private formbuilder: FormBuilder,
    private auditService: AuditsoperationService) { }

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
      this.question = {id: this.questions.length + 1, question:'¿?',type:null, options: null};
    } else {
      this.question = {id: 1, question:'¿?',type:null, options: null};
    }
    this.displayDialog = true;
}

save() {
  if(!this.questions) {
    this.questions = [];
  }
    if(this.newQuestion) {
      //If is a new question 
      if(this.question.type != null) {
        //Check if the type of question is not null
        if(this.question.options != null) {
          //Check if options are selected
          this.questions.push(this.question);
        }
      }
    } else {
      //Otherwise its a edit
      if(this.selectedQuestion.type != null) {
        //check if the type of question is not null
        let index = this.questions.indexOf(this.question);
        if(index != -1){
          this.questions[index] = this.question;
        }
      }      
    }
  this.question = null;
  this.displayDialog = false;
  this.remainoptions = false;
}

delete() {
  if(this.questions) {
    //In the case the array is empty  it will do nothing
    if(this.selectedQuestion) {
     let index = this.questions.indexOf(this.question);
    console.log(index);
    if(index != -1) {
      this.questions.splice(index,1);
    }      
    }
  }
  this.question = null;
  this.displayDialog = false;
  this.remainoptions = false;
}

onRowSelect(event) {
  console.log(event.data);
    this.newQuestion = false;
    this.question = event.data;
    this.displayDialog = true;
    this.remainoptions = false;
    if(this.question.type==='range'){
      this.remainoptions = true;
    }
}
  
  clearInputs() {
    this.submitted = false;
    this.audits.reset();
  }

  get fControls() { 
    return this.audits.controls; 
  }

  onOptions(event) {
    if(this.question) {
      console.log(event)
      this.question.options = event.value;
    }
    
  }

  onChange(event) {
    if(this.question) {
      switch(event.value){
        case 'check': this.question.options = 'true/false'; break;
        case 'description': this.question.options = 'description'; break;
      }
    }
    if(event.value === 'range') {
      //Show Options: Default and ISO 
      this.remainoptions = true;      
    } else {
      this.remainoptions = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.blockedPanel = true;
    if(this.audits.invalid) {
      this.blockedPanel = false;
      return;
    }
    if(this.questions) {
    if(this.questions.length >= 5) {      
      this.auditService.store(this.fControls.name.value,this.questions)
      .pipe(first())
      .subscribe(data => {
        this.response = data;
        this.showSuccess();
        this.clearInputs();
        this.questions = [];
        this.blockedPanel = false;
      },error => {
        this.blockedPanel = false;
        this.error = error;
        this.showError();
      });
    } else {
      this.error = 'Debe Agregar por lo menos 5 preguntas';
      this.showError();
      this.blockedPanel = false;
    }
  } else {
    this.error = 'Agregue preguntas';
    this.showError();
    this.blockedPanel = false;
  }
  }

  ngOnInit() {
    this.titleService.setTitle('Crear','crear')
    this.audits = this.formbuilder.group({
      name: new FormControl('',Validators.required)
    });
    this.options =  [
      {label:'Check', value:'check'},
      {label:'Rango', value:'range'},
      {label:'Descriptivo', value:'description'},
    ];

    this.optionsTwo =  [
      {label:'Default', value:'default'},
      {label:'Norma ISO', value:'iso'},
    ]

    this.cols = [{},{},{}];
  }

}
