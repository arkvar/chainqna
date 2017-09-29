import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';

import { SharedModule } from '@app/shared';
import {questions} from '@app/core';
import { LoginButtonComponent } from './login-button/login-button.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NewQuestionFormComponent } from './new-question-form/new-question-form.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    PageComponent,
    QuestionsComponent,
    QuestionComponent,
    LoginButtonComponent,
    VoteButtonComponent,
    LogoutButtonComponent,
    NewQuestionFormComponent
  ],
  exports: [
    PageComponent,
    QuestionsComponent,
    QuestionComponent,
    LoginButtonComponent,
    VoteButtonComponent,
    LogoutButtonComponent,
    NewQuestionFormComponent
  ],
})
export class ComponentModule { }
