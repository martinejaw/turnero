import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState, selectBranches } from 'src/app/core/store';
import { MaterialModule } from 'src/app/material.module';
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
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
  });

  async submit() {
    if (this.form.valid) {
      const { address } = this.form.value;
      this.sucursalService.createBranch(address);
      this.form.reset();
    }
  }

  volver() {
    this.router.navigate(['/admin']);
  }

  delete(id: number) {
    this.sucursalService.deleteBranch(id);
  }
}
