import {Component, Input, OnInit} from '@angular/core';

import { routerTransition } from '@app/core';
import {Question} from "@app/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [routerTransition]
})

export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() { }

}
