import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SucursalFormComponent } from './sucursales/sucursal-form/sucursal-form.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

@NgModule({
  declarations: [AdminComponent, SucursalesComponent, SucursalFormComponent],
  imports: [AdminRoutingModule, CommonModule, SharedModule, MaterialModule],
})
export class AdminModule {}
