import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Question} from '@app/question';
import {User} from '@app/user';
import 'rxjs/add/observable/fromPromise';

declare var steem: any;
declare var moment: any;


@Injectable()
export class QuestionsService {

  getQuestions() {
    const query = {
      tag: 'bitcoin',
      limit: 10
    }
    steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
    // console.log(steem.api.getDiscussionsByTrendingAsync(query));
    return Observable.fromPromise(steem.api.getDiscussionsByTrendingAsync(query));
  }

  getQuestion(author: String, permlink: String) {
    steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
    console.log(steem.api.getContentAsync(author, permlink));
    return Observable.fromPromise(steem.api.getContentAsync(author, permlink));
  }

  getReplies(author: String, permlink: String) {
    steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
    console.log(steem.api.getContentRepliesAsync(author, permlink));
    return Observable.fromPromise(steem.api.getContentRepliesAsync(author, permlink));
  }

  newQuestion(question: Question, user: User) {
    const permlink = 'chainqna-' + moment().format('MM-DD-YY-kk-mm-ss-SSS');
    // const permlink = steem.formatter.commentPermlink(document.getElementById('username').value, document.getElementById('title').value);
    const postingWif = user.postKey;
    const operations = [
      ['comment',
        {
          parent_author: '',
          parent_permlink: 'chainqna',
          author: user.name,
          permlink,
          title: question.title,
          body: question.body,
          json_metadata : JSON.stringify({
            tags: ['chainqna', 'chainqna-test'],
            format: 'markdown',
            app: 'chainqna/0.1'
          })
        }
      ],
      ['comment_options', {
        author: user.name,
        permlink,
        max_accepted_payout: '1000000.000 SBD',
        percent_steem_dollars: 10000,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: [
          [0, {
            beneficiaries: [
              { account: 'seriousownsya', weight: 100 }
            ]
          }]
        ]
      }]
    ];
    // console.log(operations);
    return Observable.fromPromise(steem.broadcast.sendAsync(
      { operations, extensions: [] },
      { posting: postingWif }
    ));
  }

}
