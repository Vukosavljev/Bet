import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport, League } from '../../models/sport.model';

@Injectable({ providedIn: 'root' })
export class SportService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('../../assets/jsons/1.sportslist.json');
  }

  getLeagues(sportId: string): Observable<League[]> {
    // Here we should pass sportId to request
    return this.http.get<League[]>(
      '../../assets/jsons/2.grouplist-caclio.json'
    );
  }
}
