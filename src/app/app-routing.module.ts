import { QuestionDetailRouteComponent } from './components/question-detail-route/question-detail-route.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'questions',
    redirectTo: 'questions',
    pathMatch: 'full'
  }, {
    path: 'question/:author/:permlink',
    component: QuestionDetailRouteComponent
  }, {
    path: 'profile',
    redirectTo: 'profile',
    pathMatch: 'full'
  }, {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
