import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from 'src/config/paths';

const routes: Routes = [
  //TODO Cambiar Componentes
  { path: Paths.HOME, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class HomeRoutingModule {}
