import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from '.';

export const getState = (store: Store<AppState>): AppState => {
  let state: AppState | undefined;
  store.pipe(take(1)).subscribe((s) => (state = s));
  return state as AppState;
};
