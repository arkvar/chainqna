import { Component, OnInit } from '@angular/core';

import {ANIMATE_ON_ROUTE_ENTER} from '@app/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private store: Store<any>) {

  }

  ngOnInit() {}

}
