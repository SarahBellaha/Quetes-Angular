import { Component, OnInit } from '@angular/core';
import { User } from './user-class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: User = new User('', '', '','');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
  }

}
