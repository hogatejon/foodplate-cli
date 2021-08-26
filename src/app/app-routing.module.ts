import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { foodGroupsRoutes } from './food-groups/food-groups-routing.module';
import { PlateComponent } from './plate/plate.component';
import { RegisterComponent } from './register/register.component';

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
