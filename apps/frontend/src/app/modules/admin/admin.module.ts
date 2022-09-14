import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from 'src/config/paths';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { AuthGuard } from 'src/app/core/auth/guards/auth.guard';
import { MenuCardComponent } from 'src/app/shared/menu-card/menu-card.component';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  //TODO Cambiar Componentes
  { path: Paths.ADMIN, component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: Paths.SUCURSAL,
    component: SucursalesComponent,
    canActivate: [AuthGuard],
  },
  { path: Paths.TURNOS, component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: Paths.TIPO_TURNOS,
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  providers: [AuthGuard],
  declarations: [AdminComponent, MenuCardComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
