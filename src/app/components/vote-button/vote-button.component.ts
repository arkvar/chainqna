import {Component, Input, OnInit} from '@angular/core';
import {VoteService} from '@app/core/vote/vote.service';
import {UserService} from '../../core/users';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() author: string;
  @Input() permlink: string;
  @Input() voters: Array<any>;
  private alreadyVoted: Boolean = false;

  constructor(private userService: UserService, private voteService: VoteService) {

  }

  ngOnInit(): void {
    // console.log(this.question);
    this.alreadyVoted = this.voteService.isVoter(this.voters);
    // this.alreadyVoted = this.question.isVoter(this.userService.getUser().uid);
  }

  vote(): void {
    const voting = this.voteService.vote(this.author, this.permlink).subscribe(res => {
      this.voters.push({voter: this.userService.getUser().uid});
      this.alreadyVoted = true;
    }, (err: any) => console.error(err));
  }

  unvote(): void {
    console.log('not yet implemented');
  }

}
