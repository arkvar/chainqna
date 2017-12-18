import { Reply } from './../../reply';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() reply: any;
  constructor() {
    console.log(this.reply);
  }

  ngOnInit() {
    console.log(this.reply);
    this.reply = new Reply(this.reply);
    console.log(this.reply);
  }

}
