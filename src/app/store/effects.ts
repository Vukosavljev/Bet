import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { SportService } from '../components/sport/sport.service';
import {
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
    private sportService: SportService
  ) {}

  loadSports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSports),
      switchMap(() => {
        return from(this.sportService.getSports()).pipe(
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
        return from(this.sportService.getLeagues(sportId)).pipe(
          map((leagues) => loadLeaguesSuccess({ leagues })),
          catchError((error) => of(loadLeaguesFailure({ error })))
        );
      })
    )
  );
}
