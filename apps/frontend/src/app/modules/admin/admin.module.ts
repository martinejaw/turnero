import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SectionModule } from './sections/section.module';
import { SucursalesModule } from './sucursales/sucursal.module';

const adminViewModules = [CommonModule, SharedModule, MaterialModule];
const adminPages = [SucursalesModule, SectionModule];

@NgModule({
  declarations: [AdminComponent],
  imports: [AdminRoutingModule, ...adminViewModules, ...adminPages],
})
export class AdminModule {}
