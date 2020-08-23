import { Component, OnInit } from '@angular/core';
import { IClassRoom } from '../../_Interfaces/classroom';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  classRooms: IClassRoom[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getClassRoom();
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
