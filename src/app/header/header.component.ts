import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',]
})
export class HeaderComponent {

constructor(private router:Router){}
  icon = faHeart;

   headerText=
   [
    {name:'Home'},
    {name:'Contact'},
    {name:'About'},
    {name:'Sign-Up'},
    {name:'login'}
   ]

   onClick(id:number){
    let path=(this.headerText[id].name);
    
    this.router.navigate(['/'+path.toLocaleLowerCase()]);

   }
   homeClick(){
    this.router.navigate(['/home']);
   }
}
