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

  columnsToDisplay = ['id', 'name', 'age', 'responsable', 'classroom'];
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  getStudents() {
    this.api
      .getCollection('students')
      .valueChanges()
      .subscribe((items: any) => {
        console.log(items);
        this.students = items;
      });
  }
}
