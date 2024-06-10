import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Users = new BehaviorSubject(null);
  loginChanged = new BehaviorSubject<number>(-1);
  LoggedUserId = -1;
  LoggedUser;

  setLoggedInUserId(userNameToGet: string) {
    this.Users.subscribe((users) => {
      for (let user of users) {
        // console.log(user);
        if (user.username === userNameToGet) {
          this.LoggedUserId=user.id;
          // console.log('user id :', Users[i].id);
          this.LoggedUser = user;
          this.loginChanged.next( this.LoggedUserId);
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
