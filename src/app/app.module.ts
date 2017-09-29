import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { StaticModule } from '@app/static';
import { ComponentModule } from '@app/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsService} from '@app/core/questions/questions.service';
import {QuestionComponent} from '@app/components/question/question.component';
import {QuestionsComponent} from '@app/components/questions/questions.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VoteService} from '@app/core/vote/vote.service';
import {UserService} from '@app/core/user/user.service';


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    ReactiveFormsModule,

    CoreModule,
    SharedModule,
    ComponentModule,

    StaticModule,

    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [QuestionsService, UserService, VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
