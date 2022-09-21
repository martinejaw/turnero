import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentGroupsService } from '../../appointment-groups.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
})
export class CreateGroupComponent implements OnInit {
  constructor(
    private appointmentGroupService: AppointmentGroupsService,
    public dialogRef: MatDialogRef<CreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sectionId: number }
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    public: new FormControl(false, Validators.required),
  });

  onAccept = () => {
    if (this.form.valid) {
      this.appointmentGroupService.createGroup({
        ...this.form.value,
        sectionId: this.data.sectionId,
      });
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
