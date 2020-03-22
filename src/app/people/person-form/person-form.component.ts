import { Component, OnInit } from '@angular/core';
import {
  Friend,
  Gender,
  FriendsService,
} from '../../shared';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  model: Friend = {
    id: 5,
    firstName: 'Brian',
    lastName: 'Sam-Bodden',
    gender: Gender.Male,
    fav: false,
  };

  addNewPersonForm: FormGroup;

  submitted = false;
  genders = Gender;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private friendsService: FriendsService,
  ) {
    this.addNewPersonForm = fb.group({
      firstName: [this.model.firstName, [Validators.required]],
      lastName: [this.model.lastName, [Validators.required]],
      gender: [this.model.gender],
      fav: [this.model.fav],
    });

    this.addNewPersonForm.valueChanges.forEach(
      (value: string) => console.log(value)
    );
    this.addNewPersonForm.get('firstName').valueChanges.forEach(
      (value: string) => console.log(value)
    );

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.friendsService.addFriend(this.addNewPersonForm.value)
      .subscribe(f => this.router.navigate(['/people']));
  }
}
