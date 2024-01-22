import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Http: HttpClient,
    private apiService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      //  Password: ['', Validators.required],
      extensionNumber: [''],
    });
  }

  OnSubmit() {
    if (this.loginForm.valid) {
      const User = this.loginForm.value;
      this.apiService.loginUser(User).subscribe(
        (response) => {
          console.log('Login Successfull :', response);

          this.loginForm.reset();
          this.router.navigate(['home']);
        },
        (error) => {
          console.log('Login failed :', error);
        }
      );
    }
  }

  submit(){
    console.log(this.loginForm);
    
  }
   
 

  // get username() {
  //   return this.loginForm.get('UserName');
  // }
  // get Password() {
  //   return this.loginForm.get('Password');
  // }
  // get extensionNumber() {
  //   return this.loginForm.get('extensionNumber');
  // }
}
