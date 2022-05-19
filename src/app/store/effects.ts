import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { RestService } from '../rest.service';
import {
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  loadLeagues,
  loadLeaguesFailure,
  loadLeaguesSuccess,
  loadSports,
  loadSportsFailure,
  loadSportsSuccess,
} from './actions';
@Injectable()
export class SportEffect {
  constructor(
    private actions$: Actions,
    private store: Store,
    private restApi: RestService
  ) {}

  loadSports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSports),
      switchMap(() => {
        return from(this.restApi.getSports()).pipe(
          map((sports) => loadSportsSuccess({ sports })),
          catchError((error) => of(loadSportsFailure({ error })))
        );
      })
    )
  );

  loadLeagues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLeagues),
      switchMap(({ sportId }) => {
        return from(this.restApi.getLeagues(sportId)).pipe(
          map((leagues) => loadLeaguesSuccess({ leagues })),
          catchError((error) => of(loadLeaguesFailure({ error })))
        );
      })
    )
  );

  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      switchMap(({ leagueId }) => {
        return from(this.restApi.getEvents(leagueId)).pipe(
          map((event) => loadEventsSuccess({ event })),
          catchError((error) => of(loadEventsFailure({ error })))
        );
      })
    )
  );
}
