import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userName: string;
  password: string;

  validUser = true;

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSignin() {
    if(this.userService.isValidUser(this.userName, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.validUser = false;
    }
  }
}
