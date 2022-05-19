import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Sport, League, Event } from './models';

@Injectable({ providedIn: 'root' })
export class RestService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('../../assets/jsons/1.sportslist.json');
  }

  getLeagues(sportId: string): Observable<League[]> {
    // Here we should pass sportId to request in real scenario
    return this.http.get<League[]>(
      '../../assets/jsons/2.grouplist-caclio.json'
    );
  }

  getEvents(leagueId: string): Observable<Event> {
    // Here we should pass leagueId to request in real scenario
    return this.http
      .get<Event[]>('../../assets/jsons/3. subevents-mondiali-2022.json')
      .pipe(map((response: Event[]) => response[0]));
  }
}
