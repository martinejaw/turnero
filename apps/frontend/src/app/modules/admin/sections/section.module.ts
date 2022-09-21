import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SimpleDialog } from 'src/app/shared/ui/dialog-form/simple-dialog.component';
import { AppointmentGroupsModule } from '../appointmentGroups/appointment-groups.module';
import { CreateSectionComponent } from './dialogs/create-section.component';
import { SectionComponent } from './section.component';

const components = [SectionComponent, CreateSectionComponent];

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
