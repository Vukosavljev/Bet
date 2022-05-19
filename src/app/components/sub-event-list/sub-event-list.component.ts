import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BasisEvent, SubEvent } from 'src/app/models';
import { AppState } from 'src/app/store';
import { loadEvents } from 'src/app/store/actions';
import { selectAllEvents } from 'src/app/store/selectors';

@Component({
  selector: 'app-sub-event-list',
  templateUrl: './sub-event-list.component.html',
  styleUrls: ['./sub-event-list.component.scss'],
})
export class SubEventListComponent implements OnInit, OnChanges {
  @Input() event!: BasisEvent;
  subEventList: SubEvent[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'].currentValue) {
      this.store.select(selectAllEvents).subscribe(([event]) => {
        console.log(event);
        if (event) {
          this.subEventList = event.Subevents;
        } else
          this.store.dispatch(
            loadEvents({ leagueId: String(this.event.GroupId) })
          );
      });
    }
  }
}
