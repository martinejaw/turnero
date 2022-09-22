import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SimpleDialog } from 'src/app/shared/ui/dialog-form/simple-dialog.component';
import { AppointmentGroupsModule } from '../appointmentGroups/appointment-groups.module';
import { CreateSectionComponent } from './dialogs/create-section/create-section.component';
import { DeleteSectionComponent } from './dialogs/delete-section/delete-section.component';
import { EditSectionComponent } from './dialogs/edit-section/edit-section.component';
import { SectionComponent } from './section.component';

const components = [
  SectionComponent,
  CreateSectionComponent,
  EditSectionComponent,
  DeleteSectionComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    SimpleDialog,
    AppointmentGroupsModule,
  ],
  exports: components,
})
export class SectionModule {}
