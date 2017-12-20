import { QuestionsService } from './../../core/questions/questions.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Reply } from './../../reply';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() reply: any;
  replies: any;
  showMore: boolean;
  constructor(private store: Store<any>, private questionService: QuestionsService) {
    this.showMore = false;
  }

  ngOnInit() {
    console.log(this.reply);
    if (this.reply.children > 0) {
      if ( this.reply.depth < 2) {
        this.replies = this.questionService.getReplies(this.reply.author, this.reply.permlink);
      } else {
        this.showMore = true;
      }
      // this.store.dispatch({ type: 'GET_REPLIES', payload: { author: this.reply.author, permlink: this.reply.permlink } });
      // this.replies = this.store.select('replies');
    }
    // this.reply = new Reply(this.reply);
  }

}
