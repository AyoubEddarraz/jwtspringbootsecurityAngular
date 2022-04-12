import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private FB: FormBuilder) { }

  ngOnInit(): void {

    // create login form
    this.createLoginForm();

  }

  createLoginForm() {
    this.loginForm = this.FB.group({
      email: ['' , Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    console.log(this.loginForm.value);
  }

}
