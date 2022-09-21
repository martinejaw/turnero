import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SimpleDialog } from 'src/app/shared/ui/dialog-form/simple-dialog.component';
import { CreateGroupComponent } from './dialogs/create-group/create-group.component';
import { DeleteGroupComponent } from './dialogs/delete-group/delete-group.component';
import { EditGroupComponent } from './dialogs/edit-group/edit-group.component';

const components = [
  CreateGroupComponent,
  EditGroupComponent,
  DeleteGroupComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialModule, SimpleDialog],
  exports: components,
})
export class AppointmentGroupsModule {}
