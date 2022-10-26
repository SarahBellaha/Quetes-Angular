import { Component, OnInit } from '@angular/core';
import { Order } from './order-class';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  model: Order = new Order('', 0, new Date(),'');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
  }

}
