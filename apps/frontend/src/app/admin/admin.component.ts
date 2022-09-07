import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userSlice$ = this.store.select('userSlice');
  businessSlice$ = this.store.select('businessSlice');

  menuItems = [
    {
      title: 'Sucursal',
      source: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'Lorem Ipsum',
    },
    {
      title: 'Sucursal 2',
      source: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'Lorem Ipsum',
    },
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
