import { QuestionsService } from './../../core/questions/questions.service';
import { Question } from './../../question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {
  @Input() question: Question;
  constructor(private qs: QuestionsService) { }

  ngOnInit() {
  }

}
