import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR } from './questions.reducer';
import { QuestionsService } from './questions.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class QuestionsEffects {
  @Effect() getQuestions$ = this.actions$
    .ofType(GET_QUESTIONS)
    .switchMap(action =>
      this.questionsService.getQuestions()
        .map(questions => ({type: GET_QUESTIONS_SUCCESS, payload: questions}))
        .catch(() => Observable.of({type: GET_QUESTIONS_ERROR})));

  constructor( private actions$: Actions,
               private questionsService: QuestionsService ) {
  }
}
