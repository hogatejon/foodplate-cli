import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { Requirements } from './models/requirements';
import { User } from './models/User';
import { RequirementsService } from './services/requirements.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  currentUser: User;
  private requirements: Array<Requirements>;

  constructor(private readonly titleService: Title,
              private readonly requirementsService: RequirementsService,
              private readonly userService: UserService) { }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate!');
    this.userService.getUser();
    this.userService.currentUser.pipe(take(1)).subscribe((user) => {
      this.currentUser = user;
    });
    this.subscribeToRequirements();
  }

  private subscribeToRequirements() {
    this.requirementsService.getRequirements().subscribe(
      reqs => {
        this.requirements = reqs;
        console.table(this.requirements);
        console.log(this.requirements[1].ageGroup);
      }
    )
  }
}
