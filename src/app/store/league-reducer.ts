import { createReducer, on } from '@ngrx/store';
import { LeagueState } from '.';
import { HttpStatus } from '../constants/http-status';
import { loadLeagues, loadLeaguesFailure, loadLeaguesSuccess } from './actions';

export const useFeatureKeyLeague = 'league';
export const leagueInitialState: LeagueState = {
  leagues: [],
  status: HttpStatus.LOADING,
  error: null,
};

export const leagueReducer = createReducer(
  leagueInitialState,
  on(loadLeagues, (state) => {
    return {
      ...state,
      status: HttpStatus.LOADING,
    };
  }),
  on(loadLeaguesSuccess, (state, { leagues }) => ({
    ...state,
    error: null,
    leagues,
    status: HttpStatus.SUCCESS,
  })),
  on(loadLeaguesFailure, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  }))
);
