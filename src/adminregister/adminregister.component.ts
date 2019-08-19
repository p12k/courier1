import { Router } from '@angular/router';
import { AdminRegitserService } from './adminregister.service';
import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {User} from './admin'
import {Location } from '@angular/common';


@Component({
    templateUrl:'./admin.register.component.html'
})
export class AdminRegitserComponent {

    admin= new User();

    constructor(private service:AdminRegitserService, private router:Router,private location:Location){}

    save(registerForm:NgForm){
        console.log(registerForm.form);
        console.log('save data' + JSON.stringify(registerForm.value))
        this.service.adminReg(this.admin).subscribe(
            data =>{ console.log('Success!!',data)
                this.router.navigate(['/login'])
    })
        
        
    }

     goBack() {
    this.location.back();
    console.log('goBack()...' );
  }
}