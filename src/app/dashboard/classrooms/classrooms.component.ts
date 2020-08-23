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

  columnsToDisplay = ['id', 'name', 'startAt', 'endAt', 'teacher'];
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getClassRoom();
  }

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }

  getClassRoom() {
    this.api
      .getCollection('classrooms')
      .valueChanges()
      .subscribe((items: any) => {
        this.classRooms = items;
      });
  }
}
