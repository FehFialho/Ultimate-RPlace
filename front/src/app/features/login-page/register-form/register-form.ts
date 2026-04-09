import { Component } from '@angular/core';
// import MockUser, { IUser } from '../User.mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css'],
  imports: [FormsModule]
})
export class RegisterForm {

  cpf!: string
  name!: string
  pass!: string
  validForm: boolean = false

  // users: IUser[] = MockUser;
  // newUser?: IUser

  // validateForm() {
  //   this.validForm =
  //     this.validateNameandPass(this.name) &&
  //     this.validateNameandPass(this.pass);

  //   if (this.validForm) {
  //     const newUser: IUser = {
  //       name: this.name,
  //       pass: this.pass,
  //       document: this.cpf
  //     };

  //     this.users.push(newUser);

  //     console.log('Usuário criado:', newUser);
  //     console.log('Lista atualizada:', this.users);
  //   }
  // }

  // validateNameandPass(name: string){

  //   if (!this.name || this.name.trim() === '') {
  //     return false
  //   }

  //   if (this.name.length < 5 || this.name.length > 30) {
  //     return false
  //   }

  //   return true
  // }
}