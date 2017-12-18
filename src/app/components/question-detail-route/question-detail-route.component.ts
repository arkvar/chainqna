import { Store } from '@ngrx/store';
import { Question } from './../../question';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-question-detail-route',
  templateUrl: './question-detail-route.component.html',
  styleUrls: ['./question-detail-route.component.scss']
})
export class QuestionDetailRouteComponent implements OnInit {
  // question$: Observable<Question>;
  question: Observable<any>;
  // replies: Observable<any>;
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {
    const author = this.route.snapshot.paramMap.get('author');
    const permlink = this.route.snapshot.paramMap.get('permlink');
    // console.log(author + '/' + permlink);
    this.store.dispatch({type: 'GET_QUESTION', payload: {author: author, permlink: permlink}});
    // this.store.dispatch(getQuestion(author, permlink));
    this.question = this.store.select('question');
    // console.log(this.question);
    // this.store.dispatch({ type: 'GET_REPLIES', payload: { author: author, permlink: permlink } });
    // this.replies = this.store.select('replies');
   }

  ngOnInit() {
    /*
    this.question$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        console.log(params.get('author'));
        return this.qs.getQuestion(params.get('author'), params.get('permlink'))
      });*/
/*
    const author = this.route.snapshot.paramMap.get('author');
    const permlink = this.route.snapshot.paramMap.get('permlink');
    console.log(author + '/' + permlink);
    this.question = this.qs.getReplies(author, permlink);
    console.log(this.question);
*/
  }

  getDebug() {
    return this.question;
  }
}
