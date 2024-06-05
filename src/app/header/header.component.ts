import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../Authentication/login/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',]
})
export class HeaderComponent implements OnInit{

constructor(private router:Router,private authService:AuthService){}
  icon = faHeart;
  isLoggedIn=false;

   headerText=
   [
    {name:'Home'},
    {name:'Contact'},
    {name:'About'},
    {name:'Our Products'},
    {name:'login'}
   ]

   onClick(id:number){
    let path=(this.headerText[id].name);
    
    this.router.navigate(['/'+path.toLocaleLowerCase()]);

   }
   homeClick(){
    this.router.navigate(['/home']);
   }



   ngOnInit(): void {
    this.authService.loggedIn.subscribe(
      data=>{
         this.isLoggedIn=data;
      }
    );
   }


   logout()
   {
     this.authService.loggedIn.next(false);
     this.router.navigate[('/home')];
   }


}
