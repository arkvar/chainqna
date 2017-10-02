import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import {ComponentModule} from '@app/components';
import {QuestionsComponent} from '@app/components/questions/questions.component';
import {QuestionsRouteComponent} from '@app/static/questions-route/questions-route.component';
import { NewQuestionRouteComponent } from './new-question-route/new-question-route.component';
import {ProfileRouteComponent} from '@app/static/profile-route/profile-route.component';
import { LoginRouteComponent } from './login-route/login-route.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    ComponentModule
  ],
  declarations: [
    HomeComponent,
    QuestionsRouteComponent,
    NewQuestionRouteComponent,
    ProfileRouteComponent,
    LoginRouteComponent
  ]
})
export class StaticModule { }
