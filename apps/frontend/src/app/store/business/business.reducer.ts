import { createReducer, on } from '@ngrx/store';
import { Business } from './business.type';
import { login } from '../user/user.actions';

export type BusinessState = { loading: boolean; business?: Business };

export const initialState: BusinessState = {
  loading: true,
};

export const businessReducer = createReducer(
  initialState as BusinessState,
  on(login, (state, action) => ({
    ...state,
    loading: false,
    business: action.business,
  }))
);
