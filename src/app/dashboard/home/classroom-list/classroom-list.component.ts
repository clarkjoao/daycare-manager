import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss'],
})
export class ClassroomListComponent implements OnInit {
  @Input()
  classRooms = [
    {
      id: 1,
      name: 'Inglês para iniciantes',
      startAt: '14:00',
      endAt: '15:40',
      teacher: 'Joao',
      teacherId: '',
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      startAt: '18:00',
      endAt: '19:40',
      teacher: 'Cecília',
      teacherId: '',
    },
  ];

  columnsToDisplay = ['id', 'name', 'startAt', 'endAt', 'teacher'];

  constructor() {}

  ngOnInit(): void {
    console.log('instanciado');
    console.log(this.classRooms);
  }
}
