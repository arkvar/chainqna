import {Vote} from '@app/vote';

export class Question {
  title: String = '';
  body: String = '';
  author: String = '';
  permlink: String = '';
  active_votes: Array<Vote>  = new Array<Vote>();
  children: Number = 0;
  pending_payout_value: String = '0 SBD';

  constructor(origin: any = null) {
    if (origin === null) {
      return;
    }
    this.title = origin.title;
    this.body = origin.body;
    this.author = origin.author;
    this.permlink = origin.permlink;
    for (const vote of origin.active_votes) {
      this.active_votes.push(new Vote(vote.voter));
    }
    this.children = origin.children;
    this.pending_payout_value = origin.pending_payout_value;
  }
/*
  constructor(title: String = '', body: String = '', author: String = '', permlink: String = '',
              active_votes: Array<Vote> = new Array<Vote>()) {
    this.active_votes = new Array<Vote>();
    this.title = title;
    this.body = body;
    this.author = author;
    this.permlink = permlink;
    for (const vote of active_votes) {
      this.active_votes.push(new Vote(vote.voter));
    }
  }
*/
  public isVoter(name: String): Boolean {
    for (const vote of this.active_votes) {
      if (vote.voter === name) {
        return true;
      }
    }
    return false;
  }
}
