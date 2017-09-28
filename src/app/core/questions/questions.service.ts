import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

declare var steem: any;


@Injectable()
export class QuestionsService {

  getQuestions() {
    const query = {
      tag: 'bitcoin',
      limit: 10
    }

    return Observable.fromPromise(steem.api.getDiscussionsByCreatedAsync(query));

  }

}
