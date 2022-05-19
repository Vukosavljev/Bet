import { Component, Input, OnInit } from '@angular/core';
import { Odd } from 'src/app/models';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
})
export class OddComponent implements OnInit {
  @Input() odd!: Odd;

  constructor() {}

  ngOnInit(): void {}
}
