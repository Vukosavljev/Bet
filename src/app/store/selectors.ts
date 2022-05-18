import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, SportState } from '.';
import { useFeatureKeySport } from './sport-reducer';

export const selectSport = createFeatureSelector<AppState, SportState>(
  useFeatureKeySport
);

export const selectAllSports = createSelector(
  selectSport,
  (state: SportState) => state.sports
);
