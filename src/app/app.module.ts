import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { OddComponent } from './components/shared/odd/odd.component';
import { PageLinkComponent } from './components/shared/page-link/page-link.component';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SubEventListComponent } from './components/sub-event-list/sub-event-list.component';
import { SportEffect } from './store/effects';
import { eventReducer, useFeatureKeyEvent } from './store/event.reducer';
import { leagueReducer, useFeatureKeyLeague } from './store/league-reducer';
import { sportReducer, useFeatureKeySport } from './store/sport-reducer';
import { MatchComponent } from './components/match/match.component';
@NgModule({
  declarations: [
    AppComponent,
    SportListComponent,
    LeagueListComponent,
    EventListComponent,
    SubEventListComponent,
    OddComponent,
    PageLinkComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    StoreModule.forRoot({
      [useFeatureKeySport]: sportReducer,
      [useFeatureKeyLeague]: leagueReducer,
      [useFeatureKeyEvent]: eventReducer,
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
