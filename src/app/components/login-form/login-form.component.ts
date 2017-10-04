import { Router } from '@angular/router';
import { User } from './../../user';
import { UserService } from './../../core/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: User = new User('', '');
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.setUser(new User());
  }

  login() {
    this.userService.setUser(this.user);
    this.router.navigate(['/profile']);
  }

}
