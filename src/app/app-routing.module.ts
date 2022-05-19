import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from './constants/routing';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { SportListComponent } from './components/sport-list/sport-list.component';

const routes: Routes = [
  {
    path: RoutingConstants.ROOT,
    component: SportListComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId/${RoutingConstants.SPORT_GROUPS}`,
    component: LeagueListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
