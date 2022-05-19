import { HttpStatus } from '../constants/http-status';
import { Event, League, Sport } from '../models';

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
export interface EventState {
  events: Event[]; //{ [sportId: string]: Event[] };
  status: HttpStatus;
  error: string | null;
}

export interface AppState {
  sport: SportState;
  league: LeagueState;
  event: EventState;
}
