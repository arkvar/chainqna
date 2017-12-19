import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { User} from './user.model';

@Injectable()
export class UserService {
  private currentUser: User;
  constructor(private localStorage: LocalStorageService) {
    const lastUser = localStorage.getItem('user');
    if (lastUser !== null && lastUser.uid && lastUser.postKey) {
      this.currentUser = new User(lastUser.uid, lastUser.postKey);
    } else {
      this.currentUser = new User(null, '');
    }
  }
  getUser() {
    return this.currentUser;
  }

  getUserO(): Observable<User> {
    // if (this.currentUser.uid && this.currentUser.uid.length > 3) {
      return Observable.of(this.currentUser);
    // }
    // return Observable.throw(new Error('test'));
  }

  setUser(user: User) {
    console.log('UserService::setUser');
    console.log(user);
    this.currentUser = user;
    this.localStorage.setItem('user', this.currentUser);
  }
}
