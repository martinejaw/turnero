import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CreateBranchComponent } from './dialogs/create-branch/create-branch.component';
import { DeleteBranchComponent } from './dialogs/delete-branch/delete-branch.component';
import { EditBranchComponent } from './dialogs/edit-branch/edit-branch.component';
import { SucursalesComponent } from './sucursales.component';

@NgModule({
  declarations: [
    CreateBranchComponent,
    SucursalesComponent,
    DeleteBranchComponent,
    EditBranchComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    CreateBranchComponent,
    SucursalesComponent,
    DeleteBranchComponent,
    EditBranchComponent,
  ],
})
export class SucursalesModule {}
