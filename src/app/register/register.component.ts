import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const currentUser: User = this.registerForm.value;
      this.currentUser = currentUser;
      console.log(this.registerForm.value);
      this.currentUser.id = 1;
      this.currentUser.registered = true;
      this.currentUser.reqsStatus = {
        fruitMet: false,
        vegMet: false,
        proteinMet: false,
        grainMet: false
      },
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {

    }
  }

}
