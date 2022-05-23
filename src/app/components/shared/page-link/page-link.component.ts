import { Component, Input, OnInit } from '@angular/core';
import { League, Sport } from '../../../models';

export interface PageLink {
  name: string;
  numberOfSubEvents?: number;
}

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss'],
})
export class PageLinkComponent implements OnInit {
  @Input() entity!: PageLink;

  constructor() {}

  ngOnInit(): void {}
}
