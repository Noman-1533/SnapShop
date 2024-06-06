import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../Shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

     this.setData();
    
  }


  setData()
  {
    this.dataService.getAllUser().subscribe((users) => {
      // console.log("users",users);

      this.userService.Users.next(users);
    });

  }



  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // console.log(username, password);
      let authObs: Observable<any>;

      authObs = this.authService.login(username, password);
      

      authObs.subscribe(
        (resData) => {
          this.userService.setLoggedInUserId(username);
          localStorage.setItem('token', resData.token);
          this.authService.loggedIn.next(true);
          alert('Logged in ');
        },
        (error) => {
          alert('Wrong Password');
        }
      );
    }
  }
}
