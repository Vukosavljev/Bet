import { createReducer, on } from '@ngrx/store';
import { initialState } from '.';
import { HttpStatus } from '../constants/http-status';
import { loadSports, loadSportsFailure, loadSportsSuccess } from './actions';

export const useFeatureKey = 'AppState';

export const reducer = createReducer(
  initialState,
  on(loadSports, (state) => {
    return {
      ...state,
      status: HttpStatus.LOADING,
    };
  }),
  on(loadSportsSuccess, (state, { sports }) => ({
    ...state,
    error: null,
    sports,
    status: HttpStatus.SUCCESS,
  })),
  on(loadSportsFailure, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  }))
);
