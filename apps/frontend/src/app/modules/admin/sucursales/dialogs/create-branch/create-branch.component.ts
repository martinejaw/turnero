import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SucursalService } from '../../sucursales.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
})
export class CreateBranchComponent implements OnInit {
  constructor(
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<CreateBranchComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
  });

  onAccept = () => {
    if (this.form.valid) {
      const { address } = this.form.value;
      this.sucursalService.createBranch(address);
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
