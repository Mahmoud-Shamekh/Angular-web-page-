import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild('form', { static: true }) logInForm: NgForm;

  constructor(private authService:AuthService , private router :Router) { }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.logInForm.valid) {
  return
    }
    const username = this.logInForm.value.username;
    const password = this.logInForm.value.password;
    this.authService.logIn(username, password)
   .subscribe(responseData => {
     console.log(responseData);
     this.router.navigate(['/product'])
    }, errorMessage => {
      console.log(errorMessage)
})


}
}
