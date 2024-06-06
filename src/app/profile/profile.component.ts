import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Authentication/login/auth.service';
import { UserService } from '../Authentication/login/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  activeTab: string = 'profile';
  loggoedInUser;
  constructor(private router: Router,private userService:UserService) {}
  ngOnInit(): void {
    this.userService.LoggedUser.subscribe(
      user=>{
        this.loggoedInUser=user;
        console.log(this.loggoedInUser);
      }
    );
  }


  

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  onSaveChanges(): void {
    
    this.router.navigate(['/home']);
  }
}
