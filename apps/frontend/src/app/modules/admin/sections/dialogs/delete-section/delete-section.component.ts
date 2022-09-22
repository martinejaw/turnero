import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionsService } from '../../sections.service';

interface FormInput {
  id: number;
}

@Component({
  selector: 'app-delete-section',
  templateUrl: './delete-section.component.html',
})
export class DeleteSectionComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private sectionService: SectionsService,
    public dialogRef: MatDialogRef<DeleteSectionComponent>
  ) {}

  ngOnInit(): void {}

  onAccept = () => {
    this.sectionService.deleteSection(this.data.id);
  };

  onClose = () => {
    this.dialogRef.close();
  };
}
