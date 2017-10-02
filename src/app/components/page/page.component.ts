import { Component, OnInit } from '@angular/core';

import {getQuestions, routerTransition} from '@app/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [routerTransition]
})

export class PageComponent implements OnInit {

  navigationSideMenu = [
    { link: 'new-question', label: 'Submit Question' },
    { link: 'questions', label: 'Questions' },
    { link: 'favorites', label: 'Favorites' },
    { link: 'profile', label: 'Profile' },
    { link: 'login', label: 'Login' }
  ];

  constructor(private store: Store<any>) {

  }

  ngOnInit() { }

}
