import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/guards/auth.guard';
import { Paths } from 'src/config/paths';
import { AdminComponent } from './admin.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
