import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: string = '';
  isNew: boolean = true;

  isLoading: boolean = false;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTeachers();
    const routerIdParams = this.route.snapshot.paramMap.get('id');
    if (routerIdParams !== null) {
      this.isNew = false;
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDocument();
    }
  }

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  onSubmit() {
    if (this.isNew) {
      this.registerNewClass();
    } else {
      this.updateClass();
    }
  }

  getTeachers() {
    this.api
      .getCollection('teachers')
      .valueChanges()
      .subscribe((items: any) => {
        this.teachers = items;
      });
  }

  getDocument() {
    this.api
      .get('classrooms', this.id)
      .valueChanges()
      .subscribe((data: any) => {
        if (data === undefined) {
          this.isNew = true;
        }
        this.form = Object.assign(this.form, data);
      });
  }

  delete(): void {
    if (confirm('Deseja excluir a Turma?')) {
      this.api.delete('classrooms', this.id);
      this.router.navigate(['/dashboard/classrooms']);
    }
  }

  registerNewClass() {
    this.isLoading = true;
    this.api
      .create('classrooms', this.form)
      .then(() => {
        alert('Turma Criada com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard/classrooms']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }

  updateClass() {
    console.log('updateCLass');
    this.api
      .update('classrooms', this.id, this.form)
      .then(() => {
        this.isLoading = !this.isLoading;
        alert('Turma Atualizada com Sucesso');
        this.router.navigate(['/dashboard/classrooms']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
