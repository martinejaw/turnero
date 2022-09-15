import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SucursalService } from '../../sucursales.service';

@Component({
  selector: 'app-delete-branch',
  templateUrl: './delete-branch.component.html',
  styleUrls: ['./delete-branch.component.scss'],
})
export class DeleteBranchComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<DeleteBranchComponent>
  ) {}

  ngOnInit(): void {}

  eliminarSucursal() {
    this.sucursalService.deleteBranch(this.data.id);
    this.onCloseClick();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
