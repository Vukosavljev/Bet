import { Component, Input, OnInit } from '@angular/core';
import { BasisEvent } from 'src/app/models';

@Component({
  selector: 'app-sub-event-list',
  templateUrl: './sub-event-list.component.html',
  styleUrls: ['./sub-event-list.component.scss'],
})
export class SubEventListComponent implements OnInit {
  @Input() event!: BasisEvent;
  constructor() {}

  ngOnInit(): void {
    console.log(this.event);
  }
}
