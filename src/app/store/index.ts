import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HttpStatus } from '../constants/http-status';
import { Sport, League } from '../models/sport.model';

export interface SportState {
  sports: Sport[];
  status: HttpStatus;
  error: string | null;
}
export interface LeagueState {
  leagues: League[];
  status: HttpStatus;
  error: string | null;
}
export interface AppState {
  sport: SportState;
  league: LeagueState;
}
