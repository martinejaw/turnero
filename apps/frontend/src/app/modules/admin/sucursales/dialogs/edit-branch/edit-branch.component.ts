import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from '../../sucursales.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss'],
})
export class EditBranchComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<EditBranchComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl(this.data.address, Validators.required),
  });

  async submit() {
    if (this.form.valid) {
      const { address } = this.form.value;
      this.sucursalService.editBranch(this.data.id, address);
      this.form.reset();
      this.onCloseClick();
    }
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
