import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, LeagueState, SportState } from '.';
import { useFeatureKeyLeague } from './league-reducer';
import { useFeatureKeySport } from './sport-reducer';

export const selectSports = createFeatureSelector<AppState, SportState>(
  useFeatureKeySport
);
export const selectLeagues = createFeatureSelector<AppState, LeagueState>(
  useFeatureKeyLeague
);

export const selectAllSports = createSelector(
  selectSports,
  (state: SportState) => state.sports
);

export const selectAllLeagues = createSelector(
  selectLeagues,
  (state: LeagueState) => state.leagues
);
