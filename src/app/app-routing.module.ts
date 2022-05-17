import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from './constants/routing';
import { SportGroupComponent } from './sport-group/sport-group.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {
    path: RoutingConstants.ROOT,
    component: SportComponent,
  },
  {
    path: `${RoutingConstants.SPORT}/:sportId`,
    component: SportGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
