import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RegisterForm } from './register-form/register-form';
import { LoginForm } from './login-form/login-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
  imports: [RouterOutlet, FormsModule, CommonModule, RegisterForm, LoginForm]
})
export class LoginPage {
  isSubscribe = false;
  isRegister = true;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this._activatedRoute.params.subscribe((params) => {
      console.log(params)
    })
  }
}
