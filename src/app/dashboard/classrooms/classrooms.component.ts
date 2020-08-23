import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClassRoom } from '../../_Interfaces/classroom';
@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit {
  classRooms: IClassRoom[] = [
    {
      id: '1',
      name: 'Inglês para iniciantes',
      startAt: 14,
      endAt: 15,
      ageRange: '',
      teacher: 'Joao',
      teacherId: '',
    },
    {
      id: '2',
      name: 'Álgebra Linear',
      startAt: 18,
      endAt: 19,
      ageRange: '',
      teacher: 'Cecília',
      teacherId: '',
    },
  ];

  columnsToDisplay = ['id', 'name', 'startAt', 'endAt', 'teacher'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(link: string) {
    console.log(link);
    this.router.navigate([`${link}`]);
  }
}
