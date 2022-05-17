import { createReducer, on } from '@ngrx/store';
import { initialState } from '.';
import { HttpStatus } from '../constants/http-status';
import { loadSports, loadSportsFailure, loadSportsSuccess } from './actions';

export const useFeatureKey = 'sport';

export const reducer = createReducer(
  initialState,
  on(loadSports, (state) => {
    return {
      ...state,
      sport: {
        ...state.sport,
        status: HttpStatus.LOADING,
      },
    };
  }),
  on(loadSportsSuccess, (state, { sports }) => ({
    ...state,
    sport: {
      ...state.sport,
      error: null,
      sports,
      status: HttpStatus.SUCCESS,
    },
  })),
  on(loadSportsFailure, (state, { error }) => ({
    ...state,
    sport: {
      ...state.sport,
      error,
      status: HttpStatus.ERROR,
    },
  }))
);
