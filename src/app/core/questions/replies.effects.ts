import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_REPLIES, GET_REPLIES_SUCCESS, GET_REPLIES_ERROR } from './replies.reducer';
import { QuestionsService } from './questions.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class RepliesEffects {
    @Effect() getReplies$ = this.actions$
        .ofType(GET_REPLIES)
        .map(toPayload)
        .switchMap(payload =>
            this.questionsService.getReplies(payload.author, payload.permlink)
                .map(replies => ({ type: GET_REPLIES_SUCCESS, payload: replies }))
                .catch(() => Observable.of({ type: GET_REPLIES_ERROR })));

    constructor(private actions$: Actions,
        private questionsService: QuestionsService) {
    }
}
