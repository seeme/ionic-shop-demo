import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email: string;
  password: string;

  validUser = true;

  constructor(
    private userService:UserService,
    private router:Router,
    private authService: FirebaseAuthService
  ) { }

  ngOnInit() {
  }

  onSignin() {
    /*if(this.userService.isValidUser(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.validUser = false;
    }*/
    this.authService.signin(this.email, this.password);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
