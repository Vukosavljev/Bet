import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport, SportGroup } from '../models/sport.model';

@Injectable({ providedIn: 'root' })
export class SportService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('../../assets/jsons/1.sportslist.json');
  }

  getSportGroup(sportId: number): Observable<SportGroup[]> {
    return this.http.get<SportGroup[]>(
      '../../assets/jsons/2.grouplist-calcio.json'
    );
  }
}
