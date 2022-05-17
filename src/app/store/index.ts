import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HttpStatus } from '../constants/http-status';
import { Sport, SportGroup } from '../models/sport.model';

export interface SportState {
  sports: Sport[];
  status: HttpStatus;
  error: string | null;
}
export interface SportGroupState {
  sportGroups: SportGroup[];
  status: HttpStatus;
  error: string | null;
}
export interface AppState {
  sport: SportState;
  sportGroup: SportGroupState;
}

export const initialState: AppState = {
  sport: {
    sports: [],
    status: HttpStatus.LOADING,
    error: null,
  },
  sportGroup: {
    sportGroups: [],
    status: HttpStatus.LOADING,
    error: null,
  },
};
