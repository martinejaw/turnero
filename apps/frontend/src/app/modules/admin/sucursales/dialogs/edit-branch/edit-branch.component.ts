import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from '../../sucursales.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface FormInput {
  id: number;
  address: string;
}

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
})
export class EditBranchComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormInput,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<EditBranchComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl(this.data.address, Validators.required),
  });

  onAccept = () => {
    if (this.form.valid) {
      const { address } = this.form.value;
      this.sucursalService.editBranch(this.data.id, address);
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
