import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  currentUser: User;
  ngDestroyed$ = new Subject();

  constructor(private readonly titleService: Title,
              private readonly userService: UserService) { }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate!');
    this.userService.getUser();
    this.userService.currentUser.pipe(take(1)).subscribe((user) => {
      this.currentUser = user;
    });
  }
}
