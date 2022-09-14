import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from 'src/config/paths';

const routes: Routes = [{ path: Paths.HOME, component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
