import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HttpStatus } from '../constants/http-status';
import { Sport } from '../models/sport.model';

export interface SportState {
  sports: Sport[];
  status: HttpStatus;
  error: string | null;
}
export interface AppState {
  sport: SportState;
}

export const initialState: AppState = {
  sport: {
    sports: [],
    status: HttpStatus.LOADING,
    error: null,
  },
};
