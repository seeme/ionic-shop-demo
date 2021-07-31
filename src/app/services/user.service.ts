import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = USERS;

  constructor() { }

  isValidUser(userName: string, password: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      const cUser = this.users[i];
      if (cUser.userName === userName && cUser.password === password) {
        return true;
      }
    }
    return false;
  } 

}
