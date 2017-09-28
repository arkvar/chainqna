import {Component, Input, OnInit} from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [routerTransition]
})

export class QuestionsComponent implements OnInit {

  @Input() questions;

  constructor() { }

  ngOnInit() { }

}
