import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MenuCardComponent } from '../common/menu-card/menu-card.component';
import { Paths } from 'src/config/paths';
import { SucursalesComponent } from './sucursales/sucursales.component';

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
  declarations: [AdminComponent, NavbarComponent, MenuCardComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
