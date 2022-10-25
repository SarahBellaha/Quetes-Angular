import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  showPicture = false;

  user = new UserProfile('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');

  constructor() { }

  ngOnInit(): void {
  }

  isVisible():void {
    if(this.showPicture === false) {
      this.showPicture = true;
    } else {
      this.showPicture = false;
    }
  }

}