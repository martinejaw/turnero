import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() title = '';
  @Input() source = '';
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}

  funcion(titulo: string): void {
    console.log('CLICK:', titulo);
  }
}
