import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  EditSection,
  Section,
} from 'src/app/core/store/admin/sections/sections.type';
import { SectionsService } from '../../sections.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
})
export class EditSectionComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { section: Section },
    private sectionService: SectionsService,
    public dialogRef: MatDialogRef<EditSectionComponent>
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    name: new FormControl(this.data.section.name, Validators.required),
    description: new FormControl(
      this.data.section.description,
      Validators.required
    ),
  });

  onAccept = () => {
    if (this.form.valid) {
      const { name, description } = this.form.value;
      const section: EditSection = {
        id: this.data.section.id,
        name,
        description,
      };
      this.sectionService.editSection(section);
    }
  };

  onClose = () => {
    this.form.reset();
  };
}
