import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditorsoperationsService } from '../auditsauditor/services/auditorsoperations.service';
import { Question, Answer } from 'src/app/models/user';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ArrayService } from '../ofi/services/array.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: AuditorsoperationsService,
    private formBuilder: FormBuilder,
    private arrayService: ArrayService
    ) { }
  enterprise :number;
  dynamicForm: FormGroup;  
  audit: number;
  questions: Question[];
  answers:Answer[] = []; 
  loading = true;
  submitted = false;

  ngOnInit() {
    this.loading = true;
    this.dynamicForm = this.formBuilder.group({
      options: new FormArray([])
    });
    this.activatedRoute.params.subscribe(params => {
      this.audit =  params['audit'];
      this.enterprise = params['enterprise'];
      });
    this.service.questions(this.audit,this.enterprise).pipe(first())
    .subscribe(data=> {
      this.questions = data;
      this.loading = false;
      console.log(this.questions);
      if(this.questions == null) {
        this.router.navigate(['/auditor/auditorias']);
      } else {
        //create dynamic Forms, even if they are mixed
        this.questions.forEach(element => {
          switch(element.options){
            case 'true/false': {
              this.answers.push({question: element.id,type:'true/false',text:element.question })
              this.t.push(this.formBuilder.group({
                check: ['', Validators.required]
              }));              
            }break;
            case 'iso': {
              this.answers.push({question: element.id,type:'iso',text:element.question })
                this.t.push(this.formBuilder.group({
                  option: ['', Validators.required]
              }));
            }break;
            case 'description': {
              this.answers.push({question: element.id,type:'description',text:element.question })
              this.t.push(this.formBuilder.group({
                description: ['', Validators.required],
                value: ['', Validators.required]
            }));
            }break;
            case 'default': {
              this.answers.push({question: element.id,type:'default',text:element.question })
              this.t.push(this.formBuilder.group({
                optionTwo: ['', Validators.required]
            }));
            }break;
          }
        }); 
      }
    }, error => {
      this.loading = false;
      this.router.navigate(['/auditor/auditorias']);
    });
  }

  singleQuestion(index:number): FormGroup {
    return this.t.controls[index] as FormGroup;
  } 

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.options as FormArray; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }
    //this.loading = true;
    console.log(this.dynamicForm.value);
    let index = 0;
    for (const element of  this.answers) {
      switch(element.type){
        case 'true/false': {         
              if(this.dynamicForm.value.options[index].check) {
                this.answers[index].option = 't';
                this.answers[index].value = 100;
              } else {
                this.answers[index].option ='f';
                this.answers[index].value = 10;
              } 
        } break;
        case 'iso': {
          switch(this.dynamicForm.value.options[index].option) {
            case '1': {
              this.answers[index].option = 'iso1';
              this.answers[index].value = 100;
            } break;
            case '2': {
              this.answers[index].option = 'iso2';
              this.answers[index].value = 75;
            } break;
            case '3': {
              this.answers[index].option = 'iso3';
              this.answers[index].value = 50;
            } break;
            case '4': {
              this.answers[index].option = 'iso4';
              this.answers[index].value = 25;
            } break;
          }
        } break;
        case 'description': {
          this.answers[index].option = 'text';
          this.answers[index].value =  this.dynamicForm.value.options[index].value;
          this.answers[index].observations = this.dynamicForm.value.options[index].description;          
        } break;
        case 'default': {
          switch( this.dynamicForm.value.options[index].optionTwo) {
            case '1': {
              this.answers[index].option = 'def1';
              this.answers[index].value = 100;
            } break;
            case '2': {
              this.answers[index].option = 'def2';
              this.answers[index].value = 80;
            } break;
            case '3': {
              this.answers[index].option = 'def3';
              this.answers[index].value = 60;
            } break;
            case '4': {
              this.answers[index].option = 'def4';
              this.answers[index].value = 40;
            } break;
            case '5': {
              this.answers[index].option = 'def5';
              this.answers[index].value = 20;
            } break;
          }
        } break;
      }
      index++;
    }
    
    console.log(this.answers);
    this.router.navigate(['auditor/preguntas/mejora',this.enterprise,this.audit]);
    this.arrayService.send(this.answers);
  }

}
