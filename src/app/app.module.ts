import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SportEffect } from './store/effects';
import { sportReducer, useFeatureKeySport } from './store/sport-reducer';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { leagueReducer, useFeatureKeyLeague } from './store/league-reducer';
import { EventListComponent } from './components/event-list/event-list.component';
import { SubEventListComponent } from './components/sub-event-list/sub-event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SportListComponent,
    LeagueListComponent,
    EventListComponent,
    SubEventListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    StoreModule.forRoot({
      [useFeatureKeySport]: sportReducer,
      [useFeatureKeyLeague]: leagueReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([SportEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
