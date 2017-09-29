import {Vote} from '@app/vote';

export class Question {
  title: String;
  body: String;
  author: String;
  permlink: String;
  active_votes: Array<Vote>;
  totalVotes: Number;

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

  public isVoter(name: String): Boolean {
    for (const vote of this.active_votes) {
      console.log(vote.voter);
      if (vote.voter === name) {
        return true;
      }
    }
    return false;
  }
}
