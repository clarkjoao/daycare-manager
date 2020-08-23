import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

import { IClassRoom } from '../../../_Interfaces/classroom';

@Component({
  selector: 'app-classroomform',
  templateUrl: './classroomform.component.html',
  styleUrls: ['./classroomform.component.scss'],
})
export class ClassroomformComponent implements OnInit {
  form: IClassRoom = {
    name: '',
    startAt: 0,
    endAt: 0,
    ageRange: '',
    teacher: '',
    teacherId: '',
  };

  teachers: Array<Object>;

  isNew: boolean = true;

  isLoading: boolean = false;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  onSubmit() {
    this.registerNewClass();
  }

  getTeachers() {}

  registerNewClass() {
    this.isLoading = true;
    this.api
      .create('classrooms', this.form)
      .then(() => {
        alert('Turma Criada com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
