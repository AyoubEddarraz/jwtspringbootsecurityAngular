import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterResponse } from 'src/app/common/interfaces/register-response';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private FB: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.FB.group({
      firstName : ['' , Validators.required],
      lastName : ['' , Validators.required],
      email: ['', Validators.required],
      password: ['' , Validators.required]
    })
  }

  register() {

    this.authService.register(this.registerForm.value).subscribe((response: RegisterResponse) => {
      console.log(response);
    })

  }

}
