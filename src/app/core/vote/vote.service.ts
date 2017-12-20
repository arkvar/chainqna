import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../users';
import {User} from '../users';
declare var steem: any;
@Injectable()
export class VoteService {
  private user: User;
  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }
  vote(author: string, permlink: string ) {
    this.user = this.userService.getUser();
    const wif = this.user.postKey;
    const voter = this.user.uid;
    const weight = 1000;
    return Observable.fromPromise(steem.broadcast.vote(wif, voter, author, permlink, weight));

  }
}
