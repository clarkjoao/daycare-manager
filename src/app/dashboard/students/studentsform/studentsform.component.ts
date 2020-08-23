import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: string = '';
  isNew: Boolean = true;
  isLoading: Boolean = false;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getClass();
    const routerIdParams = this.route.snapshot.paramMap.get('id');
    if (routerIdParams !== null) {
      this.isNew = false;
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDocument();
    }
  }
  onSubmit() {
    if (this.isNew) {
      this.registerNewStudant();
    } else {
      this.updateStudant();
    }
  }
  saveSelect(event) {
    let value = event.target.value;
    this.form.classroom = value;
  }
  navigate(link: string) {
    this.router.navigate([`${link}`]);
  }

  getClass() {
    this.api
      .getCollection('classrooms')
      .valueChanges()
      .subscribe((items: any) => {
        this.classrooms = items;
      });
  }
  getDocument() {
    this.api
      .get('students', this.id)
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
      this.api.delete('students', this.id);
      this.router.navigate(['/dashboard/students']);
    }
  }
  registerNewStudant() {
    this.isLoading = true;
    this.api
      .create('students', this.form)
      .then(() => {
        alert('Aluno Criado com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard/students']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
  updateStudant() {
    this.api
      .update('students', this.id, this.form)
      .then(() => {
        this.isLoading = !this.isLoading;
        alert('Aluno Atualizado com Sucesso');
        this.router.navigate(['/dashboard/students']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
