import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly LOGIN_URL = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) {}

  loggedIn= new BehaviorSubject(true);
  Users=new BehaviorSubject(null);
  LoggedUserId=new Subject();
  LoggedUser=new Subject();

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.LOGIN_URL, { username, password });
    
  }

  setLoggedInUserId(username:string){

    // console.log(this.Users.value[1]);

    for(let i=0;i<this.Users.value.length;i++)
      {
        if(this.Users.value[i].username===username)
          {
            this.LoggedUserId.next(this.Users.value[i].id);
            this.LoggedUser.next(this.Users.value[i]);
          }
      }

  }

  getLoggedInUserId()
  {
       return this.LoggedUserId;
  }


  getLoggedInUser()
  {
    return this.LoggedUser;
  }

  


}
