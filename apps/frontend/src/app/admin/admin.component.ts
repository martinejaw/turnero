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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
