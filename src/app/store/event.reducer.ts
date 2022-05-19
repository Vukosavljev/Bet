import { createReducer, on } from '@ngrx/store';
import { EventState } from '.';
import { HttpStatus } from '../constants/http-status';
import { loadEvents, loadEventsFailure, loadEventsSuccess } from './actions';

export const useFeatureKeyEvent = 'event';
export const eventInitialState: EventState = {
  events: [],
  status: HttpStatus.LOADING,
  error: null,
};

export const eventReducer = createReducer(
  eventInitialState,
  on(loadEvents, (state) => ({
    ...state,
    status: HttpStatus.LOADING,
  })),
  on(loadEventsSuccess, (state, { event }) => {
    return {
      ...state,
      error: null,
      events: [...state.events, event],
      status: HttpStatus.SUCCESS,
    };
  }),
  on(loadEventsFailure, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  }))
);
