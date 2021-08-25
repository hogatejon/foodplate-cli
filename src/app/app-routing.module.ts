import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { PlateComponent } from './plate/plate.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'exercises',
    component: ExercisesComponent
  },
  {
    path: 'farmers-markets',
    component: FarmersMarketsComponent
  },
  {
    path: 'food-plate',
    component: PlateComponent
  },
  {
    path: '**',
    component: PlateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
