import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from '../sucursales.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
  });

  eliminarSucursal() {
    this.sucursalService.deleteBranch(this.data.id);
    this.onCloseClick();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
