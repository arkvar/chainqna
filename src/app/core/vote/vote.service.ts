import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '@app/core/user/user.service';
import {Question} from '@app/question';
import {User} from '@app/user';
declare var steem: any;
@Injectable()
export class VoteService {
  private user: User;
  constructor(userService: UserService) {
    this.user = userService.getUser();
  }
  vote(question: Question ) {
    const wif = this.user.postKey;
    const voter = this.user.name;
    const author = question.author;
    const weight = 1000;
    const permlink = question.permlink;
    return Observable.fromPromise(steem.broadcast.vote(wif, voter, author, permlink, weight));

  }
}
