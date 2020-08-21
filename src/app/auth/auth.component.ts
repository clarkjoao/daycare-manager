import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// Firebase
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

//Interface
import { IRegister } from './auth.interface.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  typeFromRegister: boolean = false;
  formRegister: IRegister = {
    name: 'teste',
    email: '',
    password: '',
  };
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.typeFromRegister) {
      this.registerAction();
    } else {
      this.loginAction();
    }
  }
  async registerAction() {
    await this.auth
      .create({
        email: this.formRegister.email,
        password: this.formRegister.password,
      })
      .then(async (data: any) => {
        await this.api
          .createDoc('teatchers', data.user.uid, this.formRegister)
          .then(() => {
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 1000);
          });
      })
      .catch((err) => {
        alert(err.message);
        console.log('Err', err);
      });
  }

  async loginAction() {
    this.auth.login(this.formRegister, (data) => {
      if (data.code && data.message) {
        console.log('Err', data);
        return alert(data.message);
      }
      this.router.navigate(['/dashboard']);
    });
  }
}
