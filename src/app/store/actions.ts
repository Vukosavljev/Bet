import { createAction, props } from '@ngrx/store';
import { Sport, League } from '../models/sport.model';

export const loadSports = createAction('[Sports] Load Sports');
export const loadSportsSuccess = createAction(
  '[Sports] Load Sports Success',
  props<{ sports: Sport[] }>()
);
export const loadSportsFailure = createAction(
  '[Sports] Load Sports Failure',
  props<{ error: string }>()
);

export const loadLeagues = createAction('[Leagues] Load Leagues');
export const loadLeaguesSuccess = createAction(
  '[Leagues] Load Leagues Success',
  props<{ leagues: League[] }>()
);
export const loadLeaguesFailure = createAction(
  '[Leagues] Load Leagues Failure',
  props<{ error: string }>()
);
