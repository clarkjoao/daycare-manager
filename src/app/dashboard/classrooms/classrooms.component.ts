import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { ApiService } from '../../services/api.service';

import { IClassRoom } from '../../_Interfaces/classroom';
@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit {
  classRooms: IClassRoom[] = [];

  columnsToDisplay = ['name', 'startAt', 'endAt', 'ageRange', 'teacher'];
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getClassRoom();
  }

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  getRecord(row) {
    this.router.navigate([`/dashboard/classrooms/form/${row.id}`]);
  }

  getClassRoom() {
    this.api
      .getCollection('classrooms')
      .snapshotChanges()
      .forEach((items) => {
        this.classRooms = items.map((item) => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
