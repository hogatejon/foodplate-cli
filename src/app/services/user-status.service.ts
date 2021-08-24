import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  registered: boolean = false;
  user: User;

  constructor() { }

  getRegisterUser(currentUser: User): void {
    if (currentUser.registered === true) {
      console.log(`User Registered is: ${currentUser.registered}`)
    }
  }

  getUserStatus(currentUser: User): void {
    console.table(currentUser);
  }
}
