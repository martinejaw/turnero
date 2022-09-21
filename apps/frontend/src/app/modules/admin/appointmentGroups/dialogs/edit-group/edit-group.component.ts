import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface FormInput {
  id: number;
  address: string;
}

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
})
export class EditGroupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormInput,
    public dialogRef: MatDialogRef<EditGroupComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    public: new FormControl(false, Validators.required),
  });

  onAccept = () => {
    if (this.form.valid) {
      const { address } = this.form.value;
      // this.sucursalService.editGroup(this.data.id, address);
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
