import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss'],
})
export class ClassroomListComponent implements OnInit {
  @Input()
  classRooms: [
    {
      id: 1;
      name: 'Inglês para iniciantes';
      startAt: '14:00';
      endAt: '15:40';
      teacher: 'Joao';
      studentQnt: 16;
    },
    {
      id: 2;
      name: 'Álgebra Linear';
      startAt: '18:00';
      endAt: '19:40';
      teacher: 'Cecília';
      studentQnt: 32;
    }
  ];

  columnsToDisplay = [
    'id',
    'name',
    'startAt',
    'endAt',
    'teacher',
    'studentQnt',
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('instanciado');
    console.log(this.classRooms);
  }
}
