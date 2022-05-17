import { createAction, props } from '@ngrx/store';
import { Sport, SportGroup } from '../models/sport.model';

export const loadSports = createAction('[Sports] Load Sports');
export const loadSportsSuccess = createAction(
  '[Sports] Load Sports Success',
  props<{ sports: Sport[] }>()
);
export const loadSportsFailure = createAction(
  '[Sports] Load Sports Failure',
  props<{ error: string }>()
);

export const loadSportGroups = createAction('[Sports Groups] Load Sports');
export const loadSportGroupsSuccess = createAction(
  '[Sports Groups] Load Sports Success',
  props<{ sportGroup: SportGroup[] }>()
);
export const loadSportGroupsFailure = createAction(
  '[Sports Groups] Load Sports Failure',
  props<{ error: string }>()
);
