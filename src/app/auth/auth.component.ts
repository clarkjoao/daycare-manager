import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// Firebase
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

//Interface
import { IForm } from './auth.interface.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  registerMode: boolean = false;
  form: IForm = {
    name: '',
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
    if (this.registerMode) {
      this.registerAction();
    } else {
      this.loginAction();
    }
  }
  async registerAction() {
    await this.auth
      .create({
        email: this.form.email,
        password: this.form.password,
      })
      .then(async (data: any) => {
        await this.api
          .createDoc('teatchers', data.user.uid, this.form)
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
    this.auth.login(this.form, (data) => {
      if (data.code && data.message) {
        console.log('Err', data);
        return alert(data.message);
      }
      this.router.navigate(['/dashboard']);
    });
  }
}
