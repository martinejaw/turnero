import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.type';
import { AppointmentGroupsService } from '../../appointment-groups.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
})
export class EditGroupComponent implements OnInit {
  constructor(
    private appointmentGroupService: AppointmentGroupsService,
    public dialogRef: MatDialogRef<EditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group: AppointmentGroup }
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.group.name, Validators.required),
      description: new FormControl(
        this.data.group.description,
        Validators.required
      ),
      public: new FormControl(this.data.group.public, Validators.required),
      availabilities: new FormControl(this.data.group.availabilities),
    });
  }

  form: FormGroup;

  onAccept = () => {
    if (this.form.valid) {
      // TODO
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
