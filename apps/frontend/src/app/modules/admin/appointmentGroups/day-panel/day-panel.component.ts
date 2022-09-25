import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Availability } from 'src/app/core/store/admin/availabilities/availability';

export interface NewAvailability {
  day: number;
  start_time: Date;
  duration: number;
}

export interface DayPanelProp {
  day: number;
  label: string;
  availabilities: Array<NewAvailability>;
  start_time: Date;
  end_time: Date;
}

@Component({
  selector: 'app-day-panel',
  templateUrl: './day-panel.component.html',
  styleUrls: ['./day-panel.component.scss'],
})
export class DayPanelComponent implements OnInit, OnChanges {
  @Input() availabilities: Availability[];
  @Output() newAvailability = new EventEmitter<NewAvailability>();

  public days: Array<DayPanelProp>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.days = this.groupAvailabilities(this.availabilities);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.days = this.groupAvailabilities(
      changes['availabilities'].currentValue
    );
  }

  addAvailability(dayNumber: number) {
    const day = this.days.find((d) => d.day == dayNumber) as DayPanelProp;

    const newAval: NewAvailability = {
      day: dayNumber,
      start_time: day.start_time,
      duration: 30,
    };
    this.newAvailability.emit(newAval);
  }

  private groupAvailabilities(availabilities: Availability[]) {
    return [
      {
        day: 0,
        label: 'Lunes',
        availabilities: availabilities.filter((avail) => avail.day == 0),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 1,
        label: 'Martes',
        availabilities: availabilities.filter((avail) => avail.day == 1),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 2,
        label: 'Miercoles',
        availabilities: availabilities.filter((avail) => avail.day == 2),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 3,
        label: 'Jueves',
        availabilities: availabilities.filter((avail) => avail.day == 3),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 4,
        label: 'Viernes',
        availabilities: availabilities.filter((avail) => avail.day == 4),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 5,
        label: 'Sabado',
        availabilities: availabilities.filter((avail) => avail.day == 5),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
      {
        day: 6,
        label: 'Domingo',
        availabilities: availabilities.filter((avail) => avail.day == 6),
        start_time: new Date(1990, 12, 1, 12, 0, 0),
        end_time: new Date(1990, 12, 1, 12, 0, 0),
      },
    ];
  }
}
