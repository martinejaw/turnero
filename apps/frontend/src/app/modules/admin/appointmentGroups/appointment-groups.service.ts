import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { addAppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.actions';
import { AppointmentGroup } from 'src/app/core/store/admin/appointmentGroups/appointment-groups.type';
import { ApiPaths } from 'src/config/apiPaths';

@Injectable({
  providedIn: 'root',
})
export class AppointmentGroupsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async createGroup(group: Omit<AppointmentGroup, 'id'>) {
    try {
      const resp = await lastValueFrom(
        this.http.post<AppointmentGroup>(ApiPaths.appointmentGroups, group)
      );
      this.store.dispatch(addAppointmentGroup({ appointmentGroup: resp }));
    } catch {
      console.log('Explotó');
    }
  }
}
