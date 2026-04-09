import { Injectable } from "@angular/core";
import { Api } from "./api";
import { LoginDto } from "./UserInterface";

@Injectable({
  providedIn: 'root',
})

export class AuthApi extends Api{
  login = (data: LoginDto) => {
    return this.client.post(`${this.URL}/auth/login`, data).pipe();
  }
  subscribe = (data: LoginDto) => {
    return this.client.post(`${this.URL}/auth/subscribe`, data).pipe();
  }
}
