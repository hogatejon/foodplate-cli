import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Goal } from '../models/goal';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit, OnDestroy {

  goalForm: FormGroup;
  ngDestroyed$: Subject<boolean> = new Subject();
  allGoals: Goal[];
  goal: Goal;
  errorMessage: string;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalForm: boolean = false;

  constructor(private readonly fb: FormBuilder,
              private readonly goalsService: GoalsService) { }

  ngOnInit(): void {
    this.createForm();
    this.subscribeToAllGoals();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  createForm() {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    });
  }

  showEditGoalForm(goal: Goal) {
    this.newGoalForm = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  showAddGoalForm() {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  showGoalAddEditForm(showForm: boolean) {
    this.newGoalForm = showForm;
  }

  toggleGoalComplete(goal: Goal) {
    goal.didIt = !goal.didIt;
  }

  resetGoalForm() {
    this.goalForm.reset();
  }

  getGoal(goalId: number) {
    this.goalsService.getGoalById(goalId).subscribe((goal) => {
      this.goalRetrieved(goal);
    },
    error => console.log(error));
  }

  goalRetrieved(goal: Goal) {
    this.goal = goal;
    // TODO: look in to using just goal like this when setting form values like this.
    this.goalForm.setValue(goal);
    // this.goalForm.setValue({
    //   id: this.goal.id,
    //   deadline: this.goal.deadline,
    //   didIt: this.goal.didIt,
    //   goalTitle: this.goal.goalTitle
    // });
  }

  deleteGoal(goal: Goal) {
    this.goalsService.deleteGoal(goal.id).subscribe((goal) => {
      this.goalsService.getGoals()
    });
  }

  deleteCompleted() {
    const completedGoals = this.allGoals.filter(goals => goals.didIt === true)
      .map(goals => this.deleteGoal(goals));
    console.log(completedGoals);
  }

  insertGoal(goal: Goal) {
    this.goalsService.addGoal(goal).subscribe((goal) => {
      this.goalsService.getGoals();
    },
    err => console.log(err));
  }

  updateGoal(goal: Goal) {
    this.goalsService.updateGoal(goal).subscribe((goal) => {
      this.goalsService.getGoals();
    });
  }

  toggleAccomplished() {
    this.goalForm.patchValue({ didIt: true });
  }

  submitGoal(goal: Goal) {
    if (this.goalForm.valid) {
      this.showGoalAddEditForm(false);
    } else {
      console.log('invalid form submitted');
    }

    if (goal.id === null || goal.id < 1) {
      this.insertGoal(goal);
    } else {
      this.updateGoal(goal);
    }
  }


  private subscribeToAllGoals() {
    this.goalsService.getGoals().pipe(takeUntil(this.ngDestroyed$)).subscribe((goals) => {
      this.allGoals = goals;
    },

    (error) => {
      this.errorMessage = error;
      console.log(this.errorMessage);
    });
  }

}
