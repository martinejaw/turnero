import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SucursalService } from '../../sucursales.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss'],
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
