import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MenuCardComponent } from '../common/menu-card/menu-card.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  providers: [AuthGuard],
  declarations: [AdminComponent, NavbarComponent, MenuCardComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
