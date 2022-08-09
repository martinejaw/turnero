import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  providers: [AuthGuard],
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
