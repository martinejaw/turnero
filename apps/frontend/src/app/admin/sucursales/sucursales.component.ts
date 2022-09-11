import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState, selectBranches } from 'src/app/store';
import { MaterialModule } from '../../material.module';
import { SucursalService } from './sucursales.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  imports: [MaterialModule, CommonModule],
  standalone: true,
})
export class SucursalesComponent implements OnInit {
  branchesSlice$ = this.store.pipe(select(selectBranches));

  constructor(
    private sucursalService: SucursalService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      const { address } = this.form.value;
      this.sucursalService.createBranch(address);
      this.form.reset();
    }
  }
}
