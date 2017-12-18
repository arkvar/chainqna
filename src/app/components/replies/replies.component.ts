import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuestionsService } from './../../core/questions/questions.service';
import { Question } from './../../question';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {
  @Input() replies: any;
  // replies: Observable<any>;
  constructor(private store: Store<any>) {

   }

  ngOnInit() {
    // console.log(this.question);
    // const author = this.question.author;
    // const permlink = this.question.permlink;
    // console.log(author + '/' + permlink);
    // this.store.dispatch({ type: 'GET_REPLIES', payload: { author: author, permlink: permlink } });
    // this.replies = this.store.select('replies');
    // console.log(this.replies);
  }

}
