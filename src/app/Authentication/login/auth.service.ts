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

  loggedIn = new BehaviorSubject(false);


  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.LOGIN_URL, { username, password });
  }

  
}
