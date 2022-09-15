import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() title = '';
  @Input() source = '';
  @Input() content = '';
  @Input() path = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(): void {
    this.router.navigate([this.path]);
  }
}
