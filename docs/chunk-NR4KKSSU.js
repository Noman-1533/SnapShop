import{Ua as l,bb as h,g as a,ja as c,m as g,o as i}from"./chunk-ITCRWGAV.js";var v=(()=>{let e=class e{constructor(r,t,d){this.http=r,this.userService=t,this.router=d,this.LOGIN_URL="https://fakestoreapi.com/auth/login",this.loggedIn=new a(!1);let s=localStorage.getItem("loggedInUser");if(s){let n=JSON.parse(s);this.userService.LoggedUser=n,this.userService.loginChanged.next(n.id),this.loggedIn.next(!0)}else this.userService.LoggedUser=null,this.loggedIn.next(!1)}ngOnInit(){}login(r,t){return this.http.post(this.LOGIN_URL,{username:r,password:t})}logout(){this.userService.LoggedUserId=-1,localStorage.removeItem("loggedInUser"),this.loggedIn.next(!1),this.router.navigate["/home"]}};e.\u0275fac=function(t){return new(t||e)(i(c),i(h),i(l))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{v as a};