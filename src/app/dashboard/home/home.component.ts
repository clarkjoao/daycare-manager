import { Component, OnInit } from '@angular/core';
import { ClassRoom } from '../../_Interfaces/classroom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  classRooms: ClassRoom[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
