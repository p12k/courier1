import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInStatus:boolean;

  getLoggedIn(value:any){
    console.log("inside guard service");
    this.loggedInStatus=value;
    console.log(this.loggedInStatus);
  }

  isUserLoggedIn() {
    return this.loggedInStatus
  }

  logOut() {
    alert("you are logged out")
    return this.getLoggedIn(false);
  }
}