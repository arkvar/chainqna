import { Component, OnInit } from '@angular/core';
import {UserService} from '@app/core/user/user.service';
import {Question} from '@app/question';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.scss']
})
export class NewQuestionFormComponent implements OnInit {
  submitted = false;
  model = new Question();

  constructor(private userService: UserService) {
    this.model.author = userService.getUser().name;
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
