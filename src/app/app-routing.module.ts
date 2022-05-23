import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { MatchComponent } from './components/match/match.component';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SubEventListComponent } from './components/sub-event-list/sub-event-list.component';
import { RoutingConstants } from './constants/routing';

const routes: Routes = [
  {
    path: RoutingConstants.ROOT,
    component: SportListComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId/${RoutingConstants.SPORT_GROUPS}`,
    component: LeagueListComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId/${RoutingConstants.SPORT_GROUPS}/:leagueId`,
    component: SubEventListComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId/${RoutingConstants.SPORT_GROUPS}/:leagueId/${RoutingConstants.MATCH}/:matchId`,
    component: MatchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
