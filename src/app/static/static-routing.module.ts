import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {QuestionsRouteComponent} from "@app/static/questions-route/questions-route.component";
import {ProfileRouteComponent} from "@app/static/profile-route/profile-route.component";
import {NewQuestionRouteComponent} from "@app/static/new-question-route/new-question-route.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionsRouteComponent },
  { path: 'profile', component: ProfileRouteComponent },
  { path: 'new-question', component: NewQuestionRouteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
