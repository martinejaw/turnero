import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { SucursalFormComponent } from './sucursal-form/sucursal-form.component';
import { SucursalesComponent } from './sucursales.component';

@NgModule({
  declarations: [SucursalFormComponent, SucursalesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SucursalFormComponent, SucursalesComponent],
})
export class SucursalesModule {}
