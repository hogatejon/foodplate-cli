import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit, OnDestroy {

  currentUser: User;
  ngDestroyed$ = new Subject();

  plateImgPath: string = '../../assets/images/plateImages/';
  fruitEmpty: string = `${this.plateImgPath}fruit-empty.png`;
  grainDairyEmpty: string = `${this.plateImgPath}graindairy-empty.png`;
  proteinEmpty: string = `${this.plateImgPath}protein-empty.png`;
  vegEmpty: string = `${this.plateImgPath}veg-empty.png`;
  fruitFull: string = `${this.plateImgPath}fruit-full.png`;
  grainDairyFull: string = `${this.plateImgPath}graindairy-full.png`;
  proteinFull: string = `${this.plateImgPath}protein-full.jpg`;
  vegFull: string = `${this.plateImgPath}veg-full.jpg`;


  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser();
    this.userService.currentUser.pipe(takeUntil(this.ngDestroyed$)).subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
  }


}
