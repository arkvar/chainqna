import { Injectable } from '@angular/core';
import { User} from '@app/user';

@Injectable()
export class UserService {
  private currentUser: User;
  constructor() {
    this.currentUser = new User('seriousownsya', '5HqwijU9p6mcNnk9DaytGz8L5zFU9CcwP1kgdEZCn7EWEE2ytr3');
  }
  getUser() {
    return this.currentUser;
  }
}
