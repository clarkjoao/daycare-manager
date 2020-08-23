import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ITeachers } from 'src/app/_Interfaces/teachers';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers: ITeachers[] = [];

  columnsToDisplay = ['name'];
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
  getRecord(row) {
    this.router.navigate([`/dashboard/teachers/form/${row.id}`]);
  }
  getTeachers() {
    this.api
      .getCollection('teachers')
      .snapshotChanges()
      .forEach((items) => {
        this.teachers = items.map((item) => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
