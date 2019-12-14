import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditorsoperationsService } from '../auditsauditor/services/auditorsoperations.service';
import { Question, Answer } from 'src/app/models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: AuditorsoperationsService
    ) { }
  enterprise :number;
  audit: number;
  questions: Question[];
  answers:Answer[] = []; 
  loading = false;
  cols: any[];

  ngOnInit() {
    this.loading = true;
    this.cols = [{header:'Preguntas'}];
    this.activatedRoute.params.subscribe(params => {
      this.audit =  params['audit'];
      this.enterprise = params['enterprise'];
      });
    this.service.questions(this.audit).pipe(first())
    .subscribe(data=> {
      this.questions = data;
      this.loading = false;
      console.log(this.questions);
      if(this.questions.length == 0) {
        this.router.navigate(['/']);
      }
    }, error => {
      this.loading = false;
    });    
  }

  onChange(event,control:number) {
    console.log(event);
    console.log(control);
  }

  onFocus(event, selected:number){
    //this.responses.push()
    console.log(event.target);
    if(this.answers.length === 0) {
      this.answers.push({question:event.target.id,option:selected,value: event.target.value});
    } else {
      this.answers.forEach(element => {      
        if(element.question === event.target.id) {
          console.log('ya esta la pregunta');

        } else {
          this.answers.push({question:event.target.id,option:selected,value: event.target.value});
        }
      });
    }
    //console.log(event.target.id); //Id of the question
    //console.log(option); //Option from the range
  }

}
