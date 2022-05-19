import { createAction, props } from '@ngrx/store';
import { Sport, League, Event } from '../models';

// Sports
export const loadSports = createAction('[Sports] Load Sports');
export const loadSportsSuccess = createAction(
  '[Sports] Load Sports Success',
  props<{ sports: Sport[] }>()
);
export const loadSportsFailure = createAction(
  '[Sports] Load Sports Failure',
  props<{ error: string }>()
);

// Leagues
export const loadLeagues = createAction(
  '[Leagues] Load Leagues',
  props<{ sportId: string }>()
);
export const loadLeaguesSuccess = createAction(
  '[Leagues] Load Leagues Success',
  props<{ leagues: League[] }>()
);
export const loadLeaguesFailure = createAction(
  '[Leagues] Load Leagues Failure',
  props<{ error: string }>()
);

// Events
export const loadEvents = createAction(
  '[Events] Load Events',
  props<{ leagueId: string }>()
);
export const loadEventsSuccess = createAction(
  '[Events] Load Events Success',
  props<{ event: Event }>()
);
export const loadEventsFailure = createAction(
  '[Events] Load Events Failure',
  props<{ error: string }>()
);
