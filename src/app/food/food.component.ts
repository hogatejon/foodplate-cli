import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'fp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit, OnDestroy {
  ngDestroyed$ = new Subject();
  isLoading: boolean = true;
  errorMessage: string;
  foodList: Food[];
  foodGroups: Set<string> = new Set();
  foodListByGroup: Food[];

  constructor(private readonly foodService: FoodService) { }

  ngOnInit() {
    this.subscribeToFood();
    // console.log(this.foodService.getFoodsProgress());
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  handleError(err) {
    console.log(err);
  }

  displayFoods(group) {
    console.log('displayed');
    if (group === 'allFoods') {
      this.foodListByGroup = this.foodList;
    } else if (group !== 'allFoods') {
      this.foodListByGroup = this.foodList.filter((item) => {
        return item.group === group;
      });
    }
  }

  getFoodGroups(food) {
    food.forEach((food) => {
      const group = food.group;
      this.foodGroups.add(group);
    });
    console.log(this.foodGroups);
  }

  showNutrients(food: Food) {
    console.log(food.nutrients);
  }

  private subscribeToFood() {
    this.foodService.getAllFoods<Array<Food>>().pipe(takeUntil(this.ngDestroyed$)).subscribe(
      (food) => {
        this.foodList = food;
        this.getFoodGroups(this.foodList);
        this.displayFoods('allFoods');
      },
      (error) => {
        // TODO: write error-handling service
        this.errorMessage = error.message;
        this.handleError(this.errorMessage);
      },
      () => this.isLoading = false
    );
  }

}
