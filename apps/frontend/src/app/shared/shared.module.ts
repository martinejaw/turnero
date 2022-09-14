import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [MenuCardComponent],
  imports: [MaterialModule],
  exports: [MenuCardComponent],
})
export class SharedModule {}
