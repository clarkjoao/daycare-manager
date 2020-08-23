import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers = [];

  columnsToDisplay = ['id', 'name'];
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

  getTeachers() {
    this.api
      .getCollection('teachers')
      .valueChanges()
      .subscribe((items: any) => {
        this.teachers = items;
      });
  }
}
