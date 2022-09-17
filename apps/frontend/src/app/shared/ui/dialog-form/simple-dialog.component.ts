import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
  imports: [MaterialModule],
  standalone: true,
})
export class SimpleDialog implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() dialogRef: MatDialogRef<any>;

  @Input() title: string;
  @Input() onAccept: () => void;
  @Input() onClose: () => void;

  handleAccept() {
    this.onAccept();
    this.dialogRef.close();
  }

  handleClose(): void {
    this.onClose();
    this.dialogRef.close();
  }
}
