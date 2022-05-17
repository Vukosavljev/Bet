import { createSelector } from '@ngrx/store';
import { AppState, SportState } from '.';

export const selectSport = (state: AppState) => state.sport;
export const selectAllSports = createSelector(
  selectSport,
  (state: SportState) => state.sports
);
