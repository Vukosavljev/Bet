import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport, League, FullEvent } from './models';

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

  getSubEvents(eventId: string): Observable<FullEvent[]> {
    // Here we should pass eventId to request in real scenario
    return this.http.get<FullEvent[]>(
      '../../assets/jsons/3. subevents-mondiali-2022.json'
    );
  }
}
