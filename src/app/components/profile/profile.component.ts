import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../core/auth/auth.service';
import { UserService } from '../../core/users';
import { User } from '../../core/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  profile: any;
  objectKeys: any;
  constructor(private userService: UserService, private authService: AuthService) {
    this.user = userService.getUser();
    this.authService.getFullAccount(this.user.uid).subscribe(prof => {
      this.profile = prof[0];
      this.objectKeys = Object.keys(this.profile);
      console.log(this.profile);
    });
  }

  ngOnInit() {
  }

}
