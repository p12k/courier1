import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../guardservice/authentication.service';
import { User } from "src/guardservice/login";
import { Loginservice } from "src/guardservice/login.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =new User();
 isPresent:boolean;
 
  constructor(private router: Router,
    private loginservice:Loginservice, private location:Location,private auth:AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log("saved : "+this.user);
    this.loginservice.getAdmin(this.user).subscribe(
      data =>this.auth.getLoggedIn(data),
      error => this.auth.getLoggedIn(error)
    );
   
      this.router.navigate(['home'])
      
    } 
    goBack(){
      this.location.back();
      console.log( 'goBack()...');
    }

}