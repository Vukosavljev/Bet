import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, EventState, LeagueState, SportState } from '.';
import { useFeatureKeyEvent } from './event.reducer';
import { useFeatureKeyLeague } from './league-reducer';
import { useFeatureKeySport } from './sport-reducer';
import { Event } from '../models';
export const selectSports = createFeatureSelector<AppState, SportState>(
  useFeatureKeySport
);
export const selectLeagues = createFeatureSelector<AppState, LeagueState>(
  useFeatureKeyLeague
);
export const selectEvents = createFeatureSelector<AppState, EventState>(
  useFeatureKeyEvent
);

export const selectAllSports = createSelector(
  selectSports,
  (state: SportState) => state.sports
);

export const selectAllLeagues = createSelector(
  selectLeagues,
  (state: LeagueState) => state.leagues
);

export const selectAllEvents = createSelector(
  selectEvents,
  (state: EventState) => state.events
);

export const selectEvent = (GroupId: string) =>
  createSelector(selectAllEvents, (events: Event[]) =>
    events.filter((e) => e?.GroupId)
  );
