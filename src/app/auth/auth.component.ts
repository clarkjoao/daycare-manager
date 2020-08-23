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
  form: IForm = {
    name: '',
    email: '',
    password: '',
  };

  registerMode: boolean = false;
  isLoading: boolean = false;
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
    this.isLoading = true;
    await this.auth
      .create({
        email: this.form.email,
        password: this.form.password,
      })
      .then((data: any) => {
        this.api.createDoc('teachers', data.user.uid, this.form).then(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.router.navigate(['/dashboard']);
          }, 1000);
        });
      })
      .catch((err) => {
        this.isLoading = false;
        alert(err.message);
      });
  }

  async loginAction() {
    this.isLoading = true;
    this.auth.login(this.form, (data) => {
      if (data.code && data.message) {
        return alert(data.message);
      }
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    });
  }
}
