import { DeliverService } from '../deliverylist/deliverlist.service';
import { HttpClient } from '@angular/common/http';
import { DeliverList} from '../deliverylist/deliverlist.interface';
import { FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';
import { User } from './adddelivery';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AddDeliveryservice } from '../adddelivery/adddelivery.service'
@Component({
templateUrl:'./adddelivery.component.html',
})



export class AddDeliveryComponent implements OnInit{
  ngOnInit(): void {
   
  }

  constructor(private route : ActivatedRoute , private router : Router , private http:HttpClient ,
                         private AddDelivery : AddDeliveryservice){
       
    };
    user = new User();


     onBack() : void{
        this.router.navigate(['/add'])
    }

    save(userForm:NgForm){

        console.log("Saved Form" + this.user);

        this.AddDelivery.enroll(this.user).subscribe(
            data => console.log('Success !!' , data),
            error => console.error('Error !!' , error)
        )

        this.router.navigate(['/view']);
    }


}
