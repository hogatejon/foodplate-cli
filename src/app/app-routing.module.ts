import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { foodGroupsRoutes } from './food-groups/food-groups-routing.module';
import { FoodComponent } from './food/food.component';
import { PlateComponent } from './plate/plate.component';
import { RegisterComponent } from './register/register.component';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';

const fallBackRoute: Route = {
  path: '**',
  component: DefaultComponent
}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DefaultComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'farmers-markets', component: FarmersMarketsComponent },
      { path: 'food-plate', component: PlateComponent },
      { path: 'todays-goal', component: TodaysGoalComponent },
      { path: 'nutrition-info', component: FoodComponent },
      ...foodGroupsRoutes,
      fallBackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
