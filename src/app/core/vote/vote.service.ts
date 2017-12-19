import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../users';
import {Question} from '@app/question';
import {User} from '../users';
declare var steem: any;
@Injectable()
export class VoteService {
  private user: User;
  constructor(userService: UserService) {
    this.user = userService.getUser();
  }
  vote(question: Question ) {
    const wif = this.user.postKey;
    const voter = this.user.uid;
    const author = question.author;
    const weight = 1000;
    const permlink = question.permlink;
    return Observable.fromPromise(steem.broadcast.vote(wif, voter, author, permlink, weight));

  }
}
