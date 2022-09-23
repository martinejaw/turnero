import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Availability } from 'src/app/core/store/admin/availabilities/availability';

export interface DayPanelProp {
  day: number;
  label: string;
  availabilities: Array<{ start_time: Date; duration: number }>;
}

@Component({
  selector: 'app-day-panel',
  templateUrl: './day-panel.component.html',
  styleUrls: ['./day-panel.component.scss'],
})
export class DayPanelComponent implements OnInit {
  @Input() availabilities: Availability[];
  public days: Array<DayPanelProp>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.days = [
      {
        day: 0,
        label: 'Lunes',
        availabilities: this.availabilities.filter((avail) => avail.day == 0),
      },
      {
        day: 1,
        label: 'Martes',
        availabilities: this.availabilities.filter((avail) => avail.day == 1),
      },
      {
        day: 2,
        label: 'Miercoles',
        availabilities: this.availabilities.filter((avail) => avail.day == 2),
      },
      {
        day: 3,
        label: 'Jueves',
        availabilities: this.availabilities.filter((avail) => avail.day == 3),
      },
      {
        day: 4,
        label: 'Viernes',
        availabilities: this.availabilities.filter((avail) => avail.day == 4),
      },
      {
        day: 5,
        label: 'Sabado',
        availabilities: this.availabilities.filter((avail) => avail.day == 5),
      },
      {
        day: 6,
        label: 'Domingo',
        availabilities: this.availabilities.filter((avail) => avail.day == 6),
      },
    ];
  }
}
