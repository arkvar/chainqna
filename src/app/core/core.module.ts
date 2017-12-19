import { UserService } from './users/user.service';
import { UserFacade } from './users/user.facade';
import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import {QuestionsEffects} from '@app/core/questions/questions.effects';
import {QuestionEffects} from '@app/core/questions/question.effects';
import { RepliesEffects } from './questions/replies.effects';
import {questions} from '@app/core/questions/questions.reducer';
import {question} from '@app/core/questions/question.reducer';
import { replies } from './questions/replies.reducer';
import {VoteService} from '@app/core/vote/vote.service';
import {QuestionsService} from '@app/core/questions/questions.service';
import { userReducer } from './users/user.reducer';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpModule,

    // ngrx
    StoreModule.forRoot({
      questions: questions,
      question: question,
      replies: replies,
      user: userReducer
    }),
    EffectsModule.forRoot([QuestionsEffects, QuestionEffects, RepliesEffects, UserFacade]),
  ],
  declarations: [],
  providers: [LocalStorageService, VoteService, QuestionsService, AuthService, UserFacade]
})
export class CoreModule { }
