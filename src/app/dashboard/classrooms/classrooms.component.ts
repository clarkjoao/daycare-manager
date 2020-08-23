import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit {
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }
}
