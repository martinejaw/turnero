import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
