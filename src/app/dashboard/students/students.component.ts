import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

import { IStudents } from '../../_Interfaces/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  students: IStudents[] = [];

  columnsToDisplay = ['name', 'age', 'responsable', 'classroom'];
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  navigate(link: string) {
    this.router.navigate([`${link}`]);
  }

  getRecord(row) {
    this.router.navigate([`/dashboard/students/form/${row.id}`]);
  }

  getStudents() {
    this.api
      .getCollection('students')
      .snapshotChanges()
      .forEach((items) => {
        this.students = items.map((item) => {
          const data: any = item.payload.doc.data();
          const id: string = item.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
