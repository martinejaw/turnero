import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.type';
import { AppointmentGroupsService } from '../../appointment-groups.service';
import { NewAvailability } from '../../day-panel/day-panel.component';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
})
export class EditGroupComponent implements OnInit {
  constructor(
    private appointmentGroupService: AppointmentGroupsService,
    public dialogRef: MatDialogRef<EditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group: AppointmentGroup },
    private _formBuilder: FormBuilder
  ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: new FormControl(this.data.group.name, Validators.required),
      description: new FormControl(
        this.data.group.description,
        Validators.required
      ),
      public: new FormControl(this.data.group.public, Validators.required),
      availabilities: this._formBuilder.array(this.data.group.availabilities),
    });
  }

  newAvailability(newAvailability: NewAvailability) {
    const availabilities = this.form.get('availabilities') as FormArray;
    availabilities.push(this._formBuilder.group(newAvailability));
  }

  onAccept = () => {
    if (this.form.valid) {
      this.appointmentGroupService.editGroup({
        ...this.form.value,
        id: this.data.group.id,
      });
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
