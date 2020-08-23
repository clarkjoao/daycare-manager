import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  classRooms = [
    {
      id: 1,
      name: 'Inglês para iniciantes',
      startAt: 14,
      endAt: 15,
      ageRange: '',
      teacher: 'Joao',
      teacherId: '',
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      startAt: 18,
      endAt: 19,
      ageRange: '',
      teacher: 'Cecília',
      teacherId: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
