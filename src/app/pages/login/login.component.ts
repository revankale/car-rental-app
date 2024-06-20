import { Component, inject } from '@angular/core';
import { LoginUser } from '../../core/class';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginObj:LoginUser = new LoginUser();

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  });

  router = inject(Router);

  constructor() { }


  onLogin() {
    debugger;
    const loginObj = this.loginForm.value;
    if (loginObj.userName == 'Admin' && loginObj.password == '1234') {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Login Details are wrong");
    }
  }

}
