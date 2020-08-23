import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    const routerIdParams = this.route.snapshot.paramMap.get('id');
    if (routerIdParams !== null) {
      this.isNew = false;
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDocument();
    }
  }
  onSubmit() {
    if (this.isNew) {
      this.registerNewTeacher();
    } else {
      this.updateTeacher();
    }
  }
  navigate(link: string) {
    this.router.navigate([`${link}`]);
  }

  getDocument() {
    this.api
      .get('teachers', this.id)
      .valueChanges()
      .subscribe((data: any) => {
        if (data === undefined) {
          this.isNew = true;
        }
        this.form = Object.assign(this.form, data);
      });
  }

  delete(): void {
    if (this.id == this.auth.currentUser.uid) {
      alert('Voçê não pode fazer essa ação');
    }
    if (confirm('Deseja excluir a Turma?')) {
      this.api.delete('teachers', this.id);
      this.router.navigate(['/dashboard/teachers']);
    }
  }
  registerNewTeacher() {
    this.isLoading = true;
    this.api
      .create('teachers', this.form)
      .then(() => {
        alert('Professor Criado com Sucesso');
        this.isLoading = false;
        this.router.navigate(['/dashboard/teachers']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }

  updateTeacher() {
    this.api
      .update('teachers', this.id, this.form)
      .then(() => {
        this.isLoading = !this.isLoading;
        alert('Turma Atualizada com Sucesso');
        this.router.navigate(['/dashboard/teachers']);
      })
      .catch(() => {
        this.isLoading = false;
        alert('error, tente novamente.');
      });
  }
}
