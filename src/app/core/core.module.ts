import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import {QuestionsEffects} from '@app/core/questions/questions.effects';
import {QuestionEffects} from '@app/core/questions/question.effects';
import {questions} from '@app/core/questions/questions.reducer';
import {question} from '@app/core/questions/question.reducer';
import {UserService} from '@app/core/user/user.service';
import {VoteService} from '@app/core/vote/vote.service';
import {QuestionsService} from '@app/core/questions/questions.service';

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
      auth: authReducer
    }, { initialState: getInitialState }),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({
      questions: questions,
      question: question
    }, { }),
    EffectsModule.forRoot([QuestionsEffects, QuestionEffects]),
  ],
  declarations: [],
  providers: [LocalStorageService, UserService, VoteService, QuestionsService]
})
export class CoreModule { }
