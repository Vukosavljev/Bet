import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/sport.model';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  @Input() events: Event[] = [];

  constructor() {}

  ngOnInit(): void {}
}
