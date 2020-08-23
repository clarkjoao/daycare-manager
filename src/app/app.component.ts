import { Component } from '@angular/core';

// Firebase
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'daycare-manager';

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {}
}
