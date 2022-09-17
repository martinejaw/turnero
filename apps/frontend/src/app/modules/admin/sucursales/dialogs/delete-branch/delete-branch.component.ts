import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SucursalService } from '../../sucursales.service';

interface FormInput {
  id: number;
}

@Component({
  selector: 'app-delete-branch',
  templateUrl: './delete-branch.component.html',
})
export class DeleteBranchComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormInput,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<DeleteBranchComponent>
  ) {}

  ngOnInit(): void {}

  onAccept = () => {
    this.sucursalService.deleteBranch(this.data.id);
  };

  onClose = () => {
    this.dialogRef.close();
  };
}
