import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
})
export class CreateSectionComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sectionService: SectionsService,
    public dialogRef: MatDialogRef<CreateSectionComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onAccept = () => {
    if (this.form.valid) {
      const { name, description } = this.form.value;
      this.sectionService.createSection(name, description, this.data.branchId);
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
