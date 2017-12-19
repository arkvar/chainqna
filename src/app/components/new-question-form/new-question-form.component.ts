import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/users';
import {Question} from '@app/question';
import {User} from '../../core/users';
import {QuestionsService} from '@app/core/questions/questions.service';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.scss']
})
export class NewQuestionFormComponent implements OnInit {
  submitted = false;
  model = new Question();
  user = new User('', '');
  qs: any;

  constructor(private userService: UserService, questionsService: QuestionsService) {
    this.qs = questionsService;
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.model.author = this.user.uid;
  }

  onSubmit() {
    this.qs.newQuestion(this.model, this.user);
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
