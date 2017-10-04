import { UserService } from './../../core/user/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit() {
  }

}
