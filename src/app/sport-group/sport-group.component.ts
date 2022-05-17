import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-sport-group',
  templateUrl: './sport-group.component.html',
  styleUrls: ['./sport-group.component.scss'],
})
export class SportGroupComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(
      filter((params) => params['sportId']),
      map((params) => params['sportId'])
    );
    // .subscribe((sportId) => );
  }
}
