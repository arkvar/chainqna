import { LocalStorageService } from './../local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { User} from '@app/user';

@Injectable()
export class UserService {
  private currentUser: User;
  constructor(private localStorage: LocalStorageService) {
    const lastUser = localStorage.getItem('user');
    if (lastUser !== null && lastUser.name && lastUser.postKey) {
      this.currentUser = new User(lastUser.name, lastUser.postKey);
    } else {
      this.currentUser = new User();
    }
  }
  getUser() {
    return this.currentUser;
  }

  setUser(user: User) {
    this.currentUser = user;
    this.localStorage.setItem('user', this.currentUser);
  }
}
