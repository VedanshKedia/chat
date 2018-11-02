import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  @Input() name: User = {
    userId: 0,
    username: null
  };
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  setUser() {
    if (this.name.username) {
      this.userService.setUser(this.name);
      this.router.navigate(['messaging']);
    }
  }

}
