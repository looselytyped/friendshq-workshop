import { Component, OnInit } from '@angular/core';
import {
  Friend,
  Gender,
} from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  model: Friend = {
    id: 5,
    firstName: "Brian",
    lastName: "Sam-Bodden",
    gender: Gender.Male,
    fav: false,
  }
  submitted = false;
  genders = Gender;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/people']);
  }
}
