import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from '../../constants/routing';
import { Sport } from '../../models/sport.model';
import { AppState } from '../../store';
import { selectAllSports } from '../../store/selectors';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  allSports$ = this.store.select(selectAllSports);
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {}

  goToSport(sport: Sport): void {
    this.router.navigate([
      RoutingConstants.SPORT,
      sport.Id,
      RoutingConstants.SPORT_GROUPS,
    ]);
  }
}
