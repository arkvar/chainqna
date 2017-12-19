import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_QUESTION, GET_QUESTION_SUCCESS, GET_QUESTION_ERROR } from './question.reducer';
import { QuestionsService } from './questions.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class QuestionEffects {
  @Effect() getQuestion$ = this.actions$
    .ofType(GET_QUESTION)
    .map(toPayload)
    .switchMap(payload =>
      this.questionsService.getQuestion(payload.author, payload.permlink)
        .map(question => ({type: GET_QUESTION_SUCCESS, payload: question}))
        .catch(() => Observable.of({type: GET_QUESTION_ERROR})));

  constructor( private actions$: Actions,
               private questionsService: QuestionsService ) {
  }
}
