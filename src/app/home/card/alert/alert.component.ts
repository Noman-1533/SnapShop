import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  showAlert: boolean = false;
  @Output() alertClosed = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  show(): void {
    this.showAlert = true;
    setTimeout(() => {
      this.closeAlert();
    }, 2000);
  }

  closeAlert(): void {
    this.showAlert = false;
    this.alertClosed.emit();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
