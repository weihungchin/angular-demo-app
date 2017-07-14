import { EmitterService } from './../service/emitter.service';

import { NavigationService } from './../service/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-landing',
  // templateUrl: './landing.component.html',
  template:`
  <div class="container">
  <div class="mt-10"></div>


  <div class="col-lg-6 offset-lg-3">

    <div class="panel panel-default">
      <form action="" style = "padding:35px" #f = "ngForm" (ngSubmit) = "goHome(f)">
        <div class="form-group" [ngClass] = "{'has-danger':username.touched}">
          <label for="username" style = "font-size:1.5rem">Username</label>
          <input type="text" name="username" id="username" class="form-control" placeholder="Enter your name" aria-describedby="helpId" ngModel [ngClass] = "{'form-control-danger':username.touched}" required #username = "ngModel">
          <div class="form-control-feedback" *ngIf = "username.touched && username.errors?.required">Username is mandatory</div>
          <small id="helpId" class="text-muted">This will be your display name</small>
        </div>
      </form>
    </div>

  </div>

</div>


<div class="text-center pt-5">
  <button type="button" class="btn btn-primary btn-lg fa fa-sign-in"  style="cursor:pointer" (click)="goHome(f)">&nbsp;Go</button>
</div>
  `,
  styles:[
    `.panel-default{
    background:rgba(0,0,0, 0.05);
    border-bottom:none;
    border-left:none;
    border-right:none;
    border-top-width:3px;
    border-top-color:#CAFAFE;
    border-radius:0px;
}


.btn-primary{
  background:#db4437;  
  border-color:darkred; 
}

.btn-lg{
    padding:1rem 3rem;
    font-size:1.5rem;
}



.btn-primary:hover, .btn-primary:focus{
    background:darkred;
    border-color: #db4437;
}



.form-control-feedback{
    font-size:1.2rem;
}

.btn-primary.focus, .btn-primary:focus {
    box-shadow: 0 0 0 2px darkred;
}

    `
  ]
})
export class LandingComponent implements OnInit {

  inputUserName: string;

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private emitterService:EmitterService
  ) { }

  ngOnInit() {
    this.resetSession();
  }

  resetSession() {
    sessionStorage.clear();
  }

  goHome(form) {
    console.log(form.value);
    if (form.valid) {
      sessionStorage.setItem('isLoggedIn', 'Y');
      this.emitterService.setUserName(form.value.username)
      this.navigationService.setLoginStatus(true);
      console.log(this.inputUserName);
      this.router.navigate(['playlist']);
    }

  }

  onChangeName(event) {
    console.log(this.inputUserName)
  }






}
