import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-classroomform',
  templateUrl: './classroomform.component.html',
  styleUrls: ['./classroomform.component.scss'],
})
export class ClassroomformComponent implements OnInit {
  form = {
    name: '',
    startAt: 0,
    endAt: 0,
    ageRange: '',
    teacherId: '',
  };

  teachers: Array<Object>;

  isNew: boolean = true;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  onSubmit() {
    this.registerNewClass();
    console.log('submit');
  }

  getTeachers() {}

  registerNewClass() {
    console.log('register');
    this.api
      .create('classrooms', this.form)
      .then(() => {
        alert('Turma Criada com Sucesso');
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        alert('error, tente novamente.');
      });
  }
}
