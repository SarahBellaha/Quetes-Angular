import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userprofile-class';

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
      this.showPicture = !this.showPicture;
  }

}
