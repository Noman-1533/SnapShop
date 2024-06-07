import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/login/auth.service';
import { UserService } from '../authentication/login/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  activeTab: string = 'profile';
  loggedInUser;
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit(): void {

      debugger;
    
      this.loggedInUser = this.userService.getLoggedInUser();
    
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  onSaveChanges(): void {
    this.router.navigate(['/home']);
  }
}
