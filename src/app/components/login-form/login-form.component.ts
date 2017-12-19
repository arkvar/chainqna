import { UserFacade } from './../../core/users/user.facade';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './../../core/users';
import { UserService } from '../../core/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: User = new User('', '');
  constructor(private userService: UserFacade, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    // this.userService.setUser(new User());
  }

  login() {
    // console.log(this.user);
    // console.log(this.userService);
    this.userService.login(this.user.uid, this.user.postKey).subscribe(user => {
      // console.log(user);
    });
    // this.store.dispatch({type: 'AUTH_LOGIN', payload: {name: this.user.name, postKey: this.user.postKey}});
    // this.userService.setUser(this.user);
    // this.router.navigate(['/profile']);
  }

}
