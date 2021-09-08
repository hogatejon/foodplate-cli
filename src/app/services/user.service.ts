import { Injectable, Optional } from '@angular/core';

import { UserStatusService } from './user-status.service';
import { User } from '../models/User';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(
    1,
    '',
    '',
    '',
    '', {}, {
    fruitMet: true,
    vegMet: false,
    proteinMet: false,
    grainMet: false,
  }, false, '');

  currentUser = new BehaviorSubject<User>(this.user);

  constructor(@Optional() private readonly userStatusService: UserStatusService) {
    this.userStatusService.getUserStatus(this.user);
  }

  getUser(): User {
    if (localStorage.getItem('currentUser')) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = new BehaviorSubject(user);
      return user;
    } else {
      this.user.reqsStatus.fruitMet = true;
      return this.user;
    }
  }

  updateUser(user: User) {
    user.id = 1;
    user.registered = true;
    user.reqsStatus = { fruitMet: true, vegMet: false, proteinMet: false, grainMet: false };
    this.currentUser.next(user);
  }

  static storeLocalUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }
}
