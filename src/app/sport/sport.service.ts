import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../models/sport.model';

@Injectable({ providedIn: 'root' })
export class SportService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>('../../assets/jsons/1.sportslist.json');
  }
}
