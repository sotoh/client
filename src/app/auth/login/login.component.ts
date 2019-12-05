import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { Message } from 'primeng/components/common/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subLogin: Subscription;
  login: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  msgs: Message[] = [];
  error= '';
  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,    
    private authService: AuthenticationService
  ) { 
    //redirect to home if already logged in
    if(this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.login = this.formbuilder.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
    //get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
  }

  //getter for forms
  get f() {
    return this.login.controls;
  }
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Mensaje de Error' , detail:this.error});
  }

  onSubmit() {
    this.submitted = true;
    //stop if form is invalid
    if(this.login.invalid) {
      return;
    }
    this.loading = true;
    this.subLogin = this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(data => {
      console.log(data)
      this.router.navigate([this.returnUrl]);
    },
    error => {      
      this.error = error.error;
      this.loading= false;
      this.showError();
    });
  }

}
