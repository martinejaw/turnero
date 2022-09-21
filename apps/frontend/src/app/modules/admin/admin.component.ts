import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, selectUser } from 'src/app/core/store';
import { selectBranchesCount } from 'src/app/core/store/admin/branches/branches.selectors';
import { AdminPaths, Paths } from 'src/config/paths';

interface MenuItem {
  title: string;
  source: string;
  content: string;
  path: AdminPaths | string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  user$ = this.store.pipe(select(selectUser));
  branchesCount$ = this.store.pipe(select(selectBranchesCount));

  menuItems: MenuItem[] = [
    {
      title: 'Sucursal',
      source: 'playlist_add',
      content: 'Sucursal',
      path: Paths.SUCURSAL,
    },
    {
      title: 'Tipos de Turnos',
      source: 'alarm_on',
      content: 'Tipos de Turnos',
      path: Paths.TIPO_TURNOS,
    },
    {
      title: 'KKK',
      source: 'alarm_on',
      content: 'SADASD',
      path: 'admin/sections/1',
    },
    {
      title: 'Turnos',
      source: 'calendar_today',
      content: 'Turnos',
      path: Paths.TURNOS,
    },
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
