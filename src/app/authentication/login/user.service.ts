import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Users = new BehaviorSubject(null);
  LoggedUserId = new BehaviorSubject(-1);
  LoggedUser = new BehaviorSubject(null);

  setLoggedInUserId(usernametoGet: string) {
    this.Users.subscribe((Users) => {
      for (let i = 0; i <= 10; i++) {
        if (Users[i].username === usernametoGet) {
          this.LoggedUserId.next(Users[i].id);
          console.log('user id :', Users[i].id);
          this.LoggedUser.next(Users[i]);
          this.LoggedUser.subscribe((data) => {
            console.log('log user', data);
          });
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
