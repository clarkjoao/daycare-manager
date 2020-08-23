import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  classRooms = [
    {
      id: 1,
      name: 'Inglês para iniciantes',
      startAt: '14:00',
      endAt: '15:40',
      teacher: 'Joao',
      studentQnt: 16,
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      startAt: '18:00',
      endAt: '19:40',
      teacher: 'Cecília',
      studentQnt: 32,
    },
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

  ngOnInit(): void {}
  onSubmit() {}
}
