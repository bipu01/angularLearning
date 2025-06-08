import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSuccess = false

  msgForEmail = ""
  msgForPassword = ""

  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/

  loginForm!: FormGroup;


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('Biplove', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordRegex)
      ])
    })

  }

  validateEmail() {
    const emailControl = this.loginForm.get('email');

    if (emailControl?.hasError('required')) {
      this.msgForEmail = 'Email is required.';
    } else if (emailControl?.hasError('pattern')) {
      this.msgForEmail = 'Please enter a valid email address.';
    } else {
      this.msgForEmail = '';
    }
  }

  validatePassword() {
    const passwordControl = this.loginForm.get('password');

    if (passwordControl?.hasError('required')) {
      this.msgForPassword = 'Password is required.';
    } else if (passwordControl?.hasError('pattern')) {
      this.msgForPassword = 'Password must have at least one uppercase, lowercase, number, special character and be at least 8 characters.';
    } else {
      this.msgForPassword = '';
    }
  }

 submitHandler = () => {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
       this.msgForPassword = ''
       this.msgForEmail = ''
      this.isSuccess = true
    } else {

      console.log('Form is invalid!');
      this.validateEmail();
      this.validatePassword();
      this.isSuccess = false
    }
  };

}
