import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  activeTab: string = 'profile';
  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  onSaveChanges(): void {
    
    this.router.navigate(['/home']);
  }
}
