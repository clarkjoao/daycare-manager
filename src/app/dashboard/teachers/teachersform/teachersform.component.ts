import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITeachers } from '../../../_Interfaces/teachers';

// Firebase
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-teachersform',
  templateUrl: './teachersform.component.html',
  styleUrls: ['./teachersform.component.scss'],
})
export class TeachersformComponent implements OnInit {
  form: ITeachers = {
    name: '',
  };

  isNew: Boolean = true;
  isLoading: Boolean = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.registerNewTeacher();
  }
  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  registerNewTeacher() {
    this.isLoading = true;
    this.api
      .create('teachers', this.form)
      .then(() => {
        alert('Professor Criado com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
