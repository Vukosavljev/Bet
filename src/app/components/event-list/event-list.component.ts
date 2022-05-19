import { Component, Input, OnInit } from '@angular/core';
import { BasisEvent } from '../../models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() events: BasisEvent[] = [];

  constructor() {}

  ngOnInit(): void {}
}
