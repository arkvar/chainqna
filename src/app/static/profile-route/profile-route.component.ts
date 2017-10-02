import { Component, OnInit } from '@angular/core';

import {ANIMATE_ON_ROUTE_ENTER} from '@app/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {UserService} from '@app/core/user/user.service';
import {User} from '@app/user';

@Component({
  selector: 'app-profile-route',
  templateUrl: './profile-route.component.html',
  styleUrls: ['./profile-route.component.scss']
})
export class ProfileRouteComponent implements OnInit {
  user: User;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private store: Store<any>, userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit() {}

}
