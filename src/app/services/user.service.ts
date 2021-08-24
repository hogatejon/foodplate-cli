import { Injectable, Optional } from '@angular/core';

import { UserStatusService } from './user-status.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(
    1,
    'Jonathan',
    'M',
    '18-25',
    'M18-25', {}, {
    fruitMet: false,
    vegMet: false,
    proteinMet: false,
    grainMet: false,
  }, true, 'hogatejon@gmail.com')

  constructor(@Optional() private readonly userStatusService: UserStatusService) {
    this.userStatusService.getUserStatus(this.user);
  }

  getUser(): User {
    return this.user;
  }
}
