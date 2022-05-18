import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from './constants/routing';
import { LeagueComponent } from './components/league/league.component';
import { SportComponent } from './components/sport/sport.component';

const routes: Routes = [
  {
    path: RoutingConstants.ROOT,
    component: SportComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId/${RoutingConstants.SPORT_GROUPS}`,
    component: LeagueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
