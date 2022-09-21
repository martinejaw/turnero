import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  AppState,
  selectBranches,
  selectSections,
  selectSectionsByBranches,
} from 'src/app/core/store';
import { MatDialog } from '@angular/material/dialog';
import { CreateBranchComponent } from './dialogs/create-branch/create-branch.component';
import { DeleteBranchComponent } from './dialogs/delete-branch/delete-branch.component';
import { EditBranchComponent } from './dialogs/edit-branch/edit-branch.component';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
})
export class SucursalesComponent implements OnInit {
  branches$ = this.store.pipe(select(selectBranches));
  sections$ = this.store.pipe(select(selectSections));
  sectionsByBranch$: Observable<Section[] | null>;

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

  async onClickBranch(id: number) {
    this.sectionsByBranch$ = this.store.pipe(
      select(selectSectionsByBranches(id))
    );

    console.log(this.sectionsByBranch$);

    //TODO SEGUIMOS LUEGO
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
