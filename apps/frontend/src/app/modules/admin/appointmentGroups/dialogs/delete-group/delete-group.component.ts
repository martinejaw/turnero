import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface FormInput {
  id: number;
}

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
})
export class DeleteGroupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormInput,
    public dialogRef: MatDialogRef<DeleteGroupComponent>
  ) {}

  ngOnInit(): void {}

  onAccept = () => {
    // this.sucursalService.deleteGroup(this.data.id);
  };

  onClose = () => {
    this.dialogRef.close();
  };
}
