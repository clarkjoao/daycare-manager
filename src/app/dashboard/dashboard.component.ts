import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  menus: Array<Object>;
  constructor() {}

  ngOnInit(): void {
    this.menus = [
      {
        label: 'Painel',
        parent: 'dashboard',
        path: '',
      },
      {
        label: 'Anúncios',
        parent: 'dashboard',
        path: 'ads',
      },
      {
        label: 'Assinatura',
        parent: 'dashboard',
        path: 'subscription',
      },
      {
        label: 'Configurações',
        parent: 'dashboard',
        path: 'profile',
      },
    ];
  }
}
