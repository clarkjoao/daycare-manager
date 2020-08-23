import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  description: string;

  @Input()
  linkTo: string;

  shouldCardElevate: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toggleCardElevation(shouldElevate: boolean) {
    this.shouldCardElevate = shouldElevate;
  }

  navigate() {
    this.router.navigate([`/${this.linkTo}`]);
  }
}
