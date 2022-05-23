import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Subscription } from 'rxjs';
import { League } from '../../models';
import { AppState } from '../../store';
import { loadLeagues } from '../../store/actions';
import { selectAllLeagues } from '../../store/selectors';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnDestroy {
  private subscriptions = new Subscription();
  allLeagues$ = this.store.select(selectAllLeagues);
  leagueId!: number | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.subscriptions = this.route.params
      .pipe(
        filter((params) => params['sportId']),
        map((params) => params['sportId'])
      )
      .subscribe((sportId) => {
        this.store.dispatch(loadLeagues({ sportId }));
      });
  }

  addParams(league: League): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { leagueId: league.Id },
      queryParamsHandling: 'merge',
    });
  }

  removeParams(): void {
    this.leagueId = null;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { leagueId: null },
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
