import { UserFacade } from './../../core/users/user.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private userService: UserFacade) { }

  ngOnInit() {
  }

  logout() {
    // this.userService.logout().subscribe(result => {
    //   console.log(result);
    // })
    this.userService.logout().map(results => {
      console.log(results);
    }).catch(err => {
      console.log(err);
      return Observable.of(new Error(err));
    })
  }

}
