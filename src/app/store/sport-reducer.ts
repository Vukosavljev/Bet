import { createReducer, on } from '@ngrx/store';
import { SportState } from '.';
import { HttpStatus } from '../constants/http-status';
import { loadSports, loadSportsFailure, loadSportsSuccess } from './actions';

export const useFeatureKeySport = 'sport';
export const sportInitialState: SportState = {
  sports: [],
  status: HttpStatus.LOADING,
  error: null,
};

export const sportReducer = createReducer(
  sportInitialState,
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
