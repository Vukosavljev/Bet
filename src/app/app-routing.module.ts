import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
