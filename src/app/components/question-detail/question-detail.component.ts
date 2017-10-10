import { QuestionsService } from '@app/core/questions/questions.service';
import { Question } from './../../question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
    console.log(this.question);
    // this.question = new Question(this.question);
  }

}
