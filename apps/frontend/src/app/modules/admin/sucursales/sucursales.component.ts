import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState, selectBranches, selectSections } from 'src/app/core/store';
import { CreateBranchComponent } from './dialogs/create-branch/create-branch.component';
import { DeleteBranchComponent } from './dialogs/delete-branch/delete-branch.component';
import { EditBranchComponent } from './dialogs/edit-branch/edit-branch.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
})
export class SucursalesComponent implements OnInit {
  branches$ = this.store.pipe(select(selectBranches));
  sections$ = this.store.pipe(select(selectSections));

  constructor(
    private store: Store<AppState>,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/admin']);
  }

  openDialog() {
    this.dialog.open(CreateBranchComponent);
  }

  openDeleteDialog(id: number) {
    this.dialog.open(DeleteBranchComponent, {
      data: { id },
    });
  }

  openEditDialog(id: number, address: string) {
    this.dialog.open(EditBranchComponent, {
      data: { id, address },
    });
  }
}
