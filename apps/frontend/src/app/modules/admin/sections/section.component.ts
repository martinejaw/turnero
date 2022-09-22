import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { selectAppointmentGroupsBySection } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.selectors';
import { AppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.type';
import { selectSectionById } from 'src/app/core/store/admin/sections/sections.selector';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { CreateGroupComponent } from '../appointmentGroups/dialogs/create-group/create-group.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  protected sectionId: number;
  protected section$: Observable<Section | undefined>;
  protected appointmentGroups$: Observable<AppointmentGroup[]>;

  public startTime: Date;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sectionId = +(this.route.snapshot.paramMap.get('id') as string);
    this.section$ = this.store.pipe(select(selectSectionById(this.sectionId)));
    this.appointmentGroups$ = this.store.pipe(
      select(selectAppointmentGroupsBySection(this.sectionId))
    );
  }

  openCreateDialog() {
    this.dialog.open(CreateGroupComponent, {
      data: { sectionId: this.sectionId },
    });
  }
}
