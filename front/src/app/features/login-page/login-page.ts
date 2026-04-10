import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RegisterForm } from './register-form/register-form';
import { LoginForm } from './login-form/login-form';
import { CommonModule } from '@angular/common';
import { AuthApi } from '../../domain/auth.api';
import { LoginDto } from '../../domain/interfaces/UserInterface';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule]
})
export class LoginPage {
  isSubscribe = false;
  isRegister = true;

  constructor(
    private api: AuthApi,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this._activatedRoute.params.subscribe((params) => {
      console.log(params)
    })
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  subscribeForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Username(){
    return this.loginForm.get("username")
  }

  get Password(){
    return this.loginForm.get("password")
  }

  login = () => {
    if (!this.loginForm.valid)
    {
      alert("Campos Inválidos")
      return
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.login(data).subscribe(
      res => {
        this.isRegister = true
        console.log (res)
        sessionStorage.setItem("token", res);
        location.reload();
      });
  }

  subscribe = () => {
    if(!this.loginForm.valid) {
      alert("Campos Invalidos")
      return;
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.subscribe(data).subscribe()
    alert("Usuário criado com sucesso!")
  }
}
