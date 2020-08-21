import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus: Array<Object>;
  constructor() {}

  ngOnInit(): void {
    this.menus = [
      {
        label: 'Home',
        parent: 'dashboard',
        path: '',
      },
      {
        label: 'Turmas',
        parent: 'dashboard',
        path: 'classroom',
      },
      {
        label: 'Estudantes',
        parent: 'dashboard',
        path: 'students',
      },
      {
        label: 'Professores',
        parent: 'dashboard',
        path: 'teacher',
      },
    ];
  }
}
