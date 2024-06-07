import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Users = new BehaviorSubject<User[]>([]);
  LoggedUserId = -1;
  LoggedUser;

  setLoggedInUserId(userNameToGet: string) {


    this.Users.subscribe((Users) => {
      for (let i = 0; i <= Users.length; i++) {
        if (Users[i].username === userNameToGet) {
          this.LoggedUserId=Users[i].id;
          this.LoggedUser=Users[i];
        }
      }
    });
  }

  getLoggedInUserId() {
    return this.LoggedUserId;
  }

  getLoggedInUser() {
    return this.LoggedUser;
  }
}
