import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { League } from '../../models/sport.model';
import { AppState } from '../../store';
import { loadLeagues } from '../../store/actions';
import { selectAllLeagues } from '../../store/selectors';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueComponent implements OnInit {
  allLeagues$ = this.store.select(selectAllLeagues);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter((params) => params['sportId']),
        map((params) => params['sportId'])
      )
      .subscribe((sportId) => {
        this.store.dispatch(loadLeagues({ sportId }));
      });

    this.route.queryParams.subscribe((a) => console.log(a));
  }

  addParams(league: League) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { leagueId: league.Id },
      queryParamsHandling: 'preserve',
    });
  }

  removeParams(league: League) {
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: { leagueId: league.Id },
    //   queryParamsHandling: 'merge',
    // });
  }
}
