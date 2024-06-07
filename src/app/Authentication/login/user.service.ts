import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Users = new BehaviorSubject(null);
  LoggedUserId = -1;
  LoggedUser;

  setLoggedInUserId(userNameToGet: string) {
    this.Users.subscribe((Users) => {
      for (let i = 0; i <= Users.length; i++) {
        if (Users[i].username === userNameToGet) {
          this.LoggedUserId=Users[i].id;
          // console.log('user id :', Users[i].id);
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
