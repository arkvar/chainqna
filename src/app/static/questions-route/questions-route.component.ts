import { Component, OnInit } from '@angular/core';
import {ANIMATE_ON_ROUTE_ENTER, getQuestions} from '@app/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-questions-route',
  templateUrl: './questions-route.component.html',
  styleUrls: ['./questions-route.component.scss']
})
export class QuestionsRouteComponent implements OnInit {
  questions: Observable<any>;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private store: Store<any>) {
    this.store.dispatch(getQuestions());
    this.questions = this.store.select('questions');
  }

  ngOnInit() {}

}
