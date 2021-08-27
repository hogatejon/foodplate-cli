import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.css']
})
export class HomeBtnComponent implements OnInit, OnDestroy {

  currentUser: User;
  ngDestroyed$ = new Subject();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser();
    this.userService.currentUser.pipe(takeUntil(this.ngDestroyed$)).subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
  }

}
