import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  ageGroups = [
    'Select your age group', '2-3', '4-8',
    '9-13', '14-18', '19-30', '31-50', '51+'
  ];
  registerForm: FormGroup;
  ngDestroyed$ = new Subject();

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'firstName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'gender': [null, Validators.required],
      'ageGroup': [null, Validators.required]
    }, {updateOn: 'blur'});

    this.userService.currentUser.pipe(takeUntil(this.ngDestroyed$)).subscribe(user => {
      this.currentUser = user;
    });
    this.registerForm.valueChanges.pipe(takeUntil(this.ngDestroyed$)).subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
  }

  onSubmit() {
    this.userService.updateUser(this.registerForm.value);
    UserService.storeLocalUser(this.registerForm.value);
  }

}
