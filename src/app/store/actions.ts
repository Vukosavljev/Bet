import { createAction, props } from '@ngrx/store';
import { Sport } from '../models/sport.model';

export const loadSports = createAction('[Sports] Load Sports');
export const loadSportsSuccess = createAction(
  '[Sports] Load Sports Success',
  props<{ sports: Sport[] }>()
);
export const loadSportsFailure = createAction(
  '[Sports] Load Sports Failure',
  props<{ error: string }>()
);
