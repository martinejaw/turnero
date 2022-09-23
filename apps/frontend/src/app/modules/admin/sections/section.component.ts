import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { selectAppointmentGroupsBySection } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.selectors';
import { AppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.type';
import { selectSectionById } from 'src/app/core/store/admin/sections/sections.selector';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { CreateGroupComponent } from '../appointmentGroups/dialogs/create-group/create-group.component';
import { EditGroupComponent } from '../appointmentGroups/dialogs/edit-group/edit-group.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  protected sectionId: number;
  protected section$: Observable<Section | undefined>;
  protected appointmentGroups$: Observable<AppointmentGroup[]>;
  public dataSource: AppointmentGroup[];
  protected haveGroups: boolean;

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
    this.appointmentGroups$.subscribe((groups) => {
      this.haveGroups = groups.length > 0;
      this.dataSource = groups;
    });
  }

  openCreateDialog() {
    this.dialog.open(CreateGroupComponent, {
      data: { sectionId: this.sectionId },
    });
  }

  openEditDialog(group: AppointmentGroup) {
    this.dialog.open(EditGroupComponent, {
      data: { group },
    });
  }
}
