import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Subscription } from 'rxjs';
import { League } from '../../models/sport.model';
import { AppState } from '../../store';
import { loadLeagues } from '../../store/actions';
import { selectAllLeagues } from '../../store/selectors';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  allLeagues$ = this.store.select(selectAllLeagues);
  leagueId!: number | null;
  // leagueIdParam$ = this.route.queryParams.pipe(
  //   filter((params) => params['leagueId']),
  //   map((params) => params['leagueId'])
  // );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscriptions = this.route.params
      .pipe(
        filter((params) => params['sportId']),
        map((params) => params['sportId'])
      )
      .subscribe((sportId) => {
        this.store.dispatch(loadLeagues({ sportId }));
      });

    // this.route.queryParams
    //   .pipe(
    //     filter((params) => params['leagueId']),
    //     map((params) => params['leagueId'])
    //   )
    //   .subscribe((id) => {
    //     console.log(id);

    //     this.leagueId = id;
    //   });
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
