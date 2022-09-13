import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { Paths } from 'src/config/paths';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { MenuCardComponent } from '../shared/menu-card/menu-card.component';

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
