import {Component, Input, OnInit} from '@angular/core';
import {Question} from '@app/question';
import {VoteService} from '@app/core/vote/vote.service';
import {UserService} from '@app/core/user/user.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() question: Question;
  private alreadyVoted: Boolean = false;

  constructor(private userService: UserService, private voteService: VoteService) {

  }

  ngOnInit(): void {
    this.question = new Question(this.question.title, this.question.body, this.question.author, this.question.permlink,
      this.question.active_votes);
    console.log(this.question);
    this.alreadyVoted = this.question.isVoter(this.userService.getUser().name);
  }

  vote(): void {
    console.log(this.question);
    this.voteService.vote(this.question);
  }

  unvote(): void {
    console.log('not yet implemented');
  }

}
