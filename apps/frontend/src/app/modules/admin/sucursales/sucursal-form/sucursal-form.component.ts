import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from '../sucursales.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.scss'],
})
export class SucursalFormComponent implements OnInit {
  constructor(
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<SucursalFormComponent>
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
      this.onCloseClick();
    }
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
