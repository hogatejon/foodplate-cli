import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // user: User;
  currentUser: User;

  constructor(private readonly titleService: Title,
              private readonly userService: UserService) { }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate!');
    // this.user = this.userService.getUser();
    this.userService.getUser();
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
}
