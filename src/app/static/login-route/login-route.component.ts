import { Component, OnInit } from '@angular/core';
import {UserService} from '@app/core/user/user.service';
import {User} from '@app/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.scss']
})
export class LoginRouteComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.userService.setUser(new User());
  }

  login() {
    this.userService.setUser(this.user);
    this.router.navigateByUrl('questions');
  }

}
