import { Observable, take } from 'rxjs';

export function getState<T>(store$: Observable<any>): T {
  let state: T | undefined;
  store$.pipe(take(1)).subscribe((s: any) => (state = s));
  return state as T;
}
