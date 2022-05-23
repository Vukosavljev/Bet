import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Subject, Subscription, tap } from 'rxjs';
import { RoutingConstants } from '../../constants/routing';
import { Event, SubEvent } from '../../models';
import { AppState } from '../../store';
import { loadEvents } from '../../store/actions';
import { selectAllEvents } from '../../store/selectors';

@Component({
  selector: 'app-sub-event-list',
  templateUrl: './sub-event-list.component.html',
  styleUrls: ['./sub-event-list.component.scss'],
})
export class SubEventListComponent implements OnDestroy {
  event!: Event;
  private subscriptions = new Subscription();
  private leagueId$ = new Subject<string>();
  private startTime!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.subscribeToEventList();
    this.subscriptions = this.route.params
      .pipe(
        filter((params) => params['leagueId']),
        map((params) => params['leagueId'])
      )
      .subscribe((leagueId) => {
        this.leagueId$.next(leagueId);
      });
  }

  private subscribeToEventList(): void {
    const sub = combineLatest([
      this.leagueId$,
      this.store.select(selectAllEvents),
    ])
      .pipe(
        tap(([leagueId, [event]]) => {
          if (event) this.event = event;
          else this.store.dispatch(loadEvents({ leagueId }));
        })
      )
      .subscribe();
    this.subscriptions.add(sub);
  }

  showDate(event: SubEvent): boolean {
    if (this.sameDay(new Date(event.StartTimeUtc), new Date(this.startTime)))
      return false;
    this.startTime = event.StartTimeUtc;
    return true;
  }

  private sameDay(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  formatName(time: string, event: Event) {
    return new Date(time).toLocaleTimeString() + event.Name;
  }

  goToMatch(event: SubEvent): void {
    this.router.navigate([RoutingConstants.MATCH, event.Id], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
