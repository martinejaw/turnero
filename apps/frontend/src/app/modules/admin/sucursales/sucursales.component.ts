import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState, selectBranches } from 'src/app/core/store';
import { SucursalService } from './sucursales.service';
import { MatDialog } from '@angular/material/dialog';
import { SucursalFormComponent } from './sucursal-form/sucursal-form.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
})
export class SucursalesComponent implements OnInit {
  branches$ = this.store.pipe(select(selectBranches));

  constructor(
    private sucursalService: SucursalService,
    private store: Store<AppState>,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/admin']);
  }

  delete(id: number) {
    this.sucursalService.deleteBranch(id);
  }

  openDialog() {
    this.dialog.open(SucursalFormComponent, {
      width: '300px',
    });
  }
}
