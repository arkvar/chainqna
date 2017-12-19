import { UserFacade } from './core/users/user.facade';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared';
import { CoreModule } from './core';

import { StaticModule } from './static';
import { ComponentModule } from './components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsService} from './core/questions/questions.service';
import {QuestionComponent} from './components/question/question.component';
import {QuestionsComponent} from './components/questions/questions.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VoteService} from './core/vote/vote.service';
import { UserService } from './core/users';


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
  providers: [QuestionsService, UserService, VoteService, UserFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
