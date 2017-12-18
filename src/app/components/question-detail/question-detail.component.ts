import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from './../../question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: any;
  replies: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {
    const author = this.route.snapshot.paramMap.get('author');
    const permlink = this.route.snapshot.paramMap.get('permlink');
    // console.log(author + '/' + permlink);
    this.store.dispatch({ type: 'GET_REPLIES', payload: { author: author, permlink: permlink } });
    this.replies = this.store.select('replies');
  }

  ngOnInit() {

  }

}
