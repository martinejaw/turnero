import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { selectSectionById } from 'src/app/core/store/admin/sections/sections.selector';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { CreateGroupComponent } from './dialogs/create-group/create-group.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  protected sectionId: number;
  protected section$: Observable<Section | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sectionId = +(this.route.snapshot.paramMap.get('id') as string);
    this.section$ = this.store.pipe(select(selectSectionById(this.sectionId)));
  }

  openCreateDialog() {}
}
