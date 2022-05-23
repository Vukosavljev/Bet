import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasisEvent } from '../../models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() events: BasisEvent[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToEvents(league: BasisEvent): void {
    this.router.navigate([league.Id], { relativeTo: this.route });
  }
}
