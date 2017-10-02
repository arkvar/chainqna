import { Injectable } from '@angular/core';
import { User} from '@app/user';

@Injectable()
export class UserService {
  private currentUser: User;
  constructor() {
    this.currentUser = new User('test-user', 'test-key');
  }
  getUser() {
    return this.currentUser;
  }

  setUser(user: User) {
    this.currentUser = user;
  }
}
