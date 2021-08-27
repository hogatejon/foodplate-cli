import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  altText: string = 'FoodPlate Logo';
  appVersionString: string = '1.0.1';
  appVersionNum: number = this.versionStringToNumber(this.appVersionString);
  icon: string = 'assets/images/icons/icons-29.png';
  isCurrent: boolean = true;
  selectedGoal: string;
  subscription: Subscription
  ngDestroyed$ = new Subject();

  constructor(private readonly todaysGoalService: TodaysGoalService) { }

  ngOnInit(): void {
    this.checkForUpdateNeeded();
    this.subscribeToSelectedGoal();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
  }

  checkForUpdateNeeded() {
    if (this.appVersionNum <= 100) {
      this.isCurrent = false;
    }
  }

  clearGoal() {
    this.todaysGoalService.clearGoal();
  }

  moreInfo() {
    alert('for more info see choosemyplate.gov');
  }

  private versionStringToNumber(version: string) {
    return parseInt(version.split('.').join(''), 10);
  }

  private subscribeToSelectedGoal() {
    this.subscription = this.todaysGoalService.getGoal().pipe(takeUntil(this.ngDestroyed$)).subscribe((goal) => {
      this.selectedGoal = goal;
    });
  }

}
