import { Component, OnInit } from '@angular/core';
import {
  Friend,
  Gender,
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

  model = new Friend(5, "Brian", "Sam-Bodden", Gender.Male, false);

  addNewPersonForm = new FormGroup({
    firstName: new FormControl(this.model.first_name, [Validators.required]),
    lastName: new FormControl(this.model.last_name, [Validators.required]),
    gender: new FormControl(this.model.gender),
    fav: new FormControl(this.model.fav),
  });

  addNewPersonFbForm: FormGroup;

  submitted = false;
  genders = Gender;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.addNewPersonFbForm = fb.group({
      firstName: [this.model.first_name, [Validators.required]],
      lastName: [this.model.last_name, [Validators.required]],
      gender: [this.model.gender],
      fav: [this.model.fav],
    });

    this.addNewPersonFbForm.valueChanges.forEach(
      (value: string) => console.log(value)
    );
    this.addNewPersonFbForm.get('firstName').valueChanges.forEach(
      (value: string) => console.log(value)
    );
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.addNewPersonFbForm.value);
    console.log(this.model);
    this.submitted = true;
    // this.router.navigate(['/people']);
  }
}
