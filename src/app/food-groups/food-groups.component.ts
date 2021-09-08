import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodGroupsService } from '../services/food-groups.service';

@Component({
  selector: 'fp-food-groups',
  templateUrl: './food-groups.component.html',
  styleUrls: ['./food-groups.component.css']
})
export class FoodGroupsComponent implements OnInit {

  foodGroups;

  constructor(private readonly foodGroupsService: FoodGroupsService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodGroups = this.foodGroupsService.getFoodGroups();
    console.log(this.foodGroups);
  }

  showGroup(group): void {
    this.router.navigate([group.name], {relativeTo: this.route, queryParams: {group: group.name}})
  }

}
