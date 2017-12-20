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
  vote(author: string, permlink: string ): Observable<any> {
    this.user = this.userService.getUser();
    const wif = this.user.postKey;
    const voter = this.user.uid;
    const weight = 1000;
    steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
    return Observable.fromPromise(steem.broadcast.voteAsync(wif, voter, author, permlink, weight));
  }

  isVoter(voters: Array<any>): boolean {
    for (const voter of voters) {
      if (voter.voter === this.user.uid) {
        return true;
      }
    }
    return false;
  }
}
