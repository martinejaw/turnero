import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { Branch } from 'src/app/core/store/admin/branches/branches.type';
import { selectSectionsByBranches } from 'src/app/core/store/admin/sections/sections.selector';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { CreateSectionComponent } from '../../sections/dialogs/create-section/create-section.component';
import { DeleteSectionComponent } from '../../sections/dialogs/delete-section/delete-section.component';
import { EditSectionComponent } from '../../sections/dialogs/edit-section/edit-section.component';
import { DeleteBranchComponent } from '../dialogs/delete-branch/delete-branch.component';
import { EditBranchComponent } from '../dialogs/edit-branch/edit-branch.component';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.scss'],
})
export class BranchItemComponent implements OnInit {
  @Input() branch: Branch;
  sectionsByBranch$: Observable<Section[]>;
  sections: Section[];
  haveSections: Boolean;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sectionsByBranch$ = this.store.pipe(
      select(selectSectionsByBranches(this.branch.id))
    );

    this.sectionsByBranch$.subscribe((obs) => {
      this.haveSections = obs.length > 0;
      this.sections = obs;
    });
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

  openCreateSectionDialog() {
    this.dialog.open(CreateSectionComponent, {
      data: { branchId: this.branch.id },
    });
  }

  openEditSectionDialog(section: Section) {
    this.dialog.open(EditSectionComponent, {
      data: { section },
    });
  }

  openDeleteSectionDialog(id: number) {
    this.dialog.open(DeleteSectionComponent, {
      data: { id },
    });
  }

  navigateToSectionPage(id: number) {
    this.router.navigate([`/admin/sections/${id}`]);
  }
}
