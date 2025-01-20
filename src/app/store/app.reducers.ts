import { createReducer, on } from '@ngrx/store';
import * as Actions from './app.actions';
import { AppStateModel } from '@src/app/store/app-state.model';

export const initialState: AppStateModel = {};

export const appReducers = createReducer(
  initialState,
  on(Actions.ClearState, () => ({ ...initialState }))
);
