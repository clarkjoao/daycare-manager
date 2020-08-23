import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

import { IStudents } from '../../../_Interfaces/students';
@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.scss'],
})
export class StudentsformComponent implements OnInit {
  form: IStudents = {
    name: '',
    age: 0,
    responsable: '',
    classroom: '',
    classId: '',
  };
  classrooms: Array<Object>;

  isNew: Boolean = true;
  isLoading: Boolean = false;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.registerNewClass();
  }

  getClass() {}

  registerNewClass() {
    this.isLoading = true;
    this.api
      .create('students', this.form)
      .then(() => {
        alert('Aluno Criado com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
