import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { CapitalizeFirstPipe } from '../home/capitalize-first.pipe';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CapitalizeFirstPipe

  ],
  exports: [
    ProfileComponent
  ],
})
export class ProfileModule { }
