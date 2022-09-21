import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SimpleDialog } from 'src/app/shared/ui/dialog-form/simple-dialog.component';
import { CreateBranchComponent } from './dialogs/create-branch/create-branch.component';
import { DeleteBranchComponent } from './dialogs/delete-branch/delete-branch.component';
import { EditBranchComponent } from './dialogs/edit-branch/edit-branch.component';
import { SucursalesComponent } from './sucursales.component';
import { BranchItemComponent } from './branch-item/branch-item.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CreateBranchComponent,
    SucursalesComponent,
    DeleteBranchComponent,
    EditBranchComponent,
    BranchItemComponent,
  ],
  imports: [CommonModule, MaterialModule, SimpleDialog, MatTableModule],
  exports: [
    CreateBranchComponent,
    SucursalesComponent,
    DeleteBranchComponent,
    EditBranchComponent,
    BranchItemComponent,
  ],
})
export class SucursalesModule {}
