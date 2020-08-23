import { Component, OnInit, Input } from '@angular/core';
import { IClassRoom } from '../../../_Interfaces/classroom';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss'],
})
export class ClassroomListComponent implements OnInit {
  @Input()
  classRooms: IClassRoom[] = [];

  columnsToDisplay = ['name', 'teacher'];

  constructor() {}

  ngOnInit(): void {}
}
