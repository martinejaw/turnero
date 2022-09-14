import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from 'src/config/paths';
import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  { path: Paths.LOGIN, component: LoginComponent },
  { path: Paths.SIGNUP, component: SignupComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
