import { DeliverService } from './deliverlist.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {DeliverList} from './deliverlist.interface';
@Component({
    templateUrl:"./deliverlist.component.html",
    styleUrls:['./deliverlist.component.css']
})

export class DeliverListComponent implements OnInit{
 
  title='Delivery Lists'
  deliverlist :DeliverList[]= [];
  errorMessage:string;

     constructor( private location: Location,private deliverservice:DeliverService ) { 
  }

ngOnInit(): void {
  this.deliverservice.getCustomer().subscribe(
  deliverlist =>{
  this.deliverlist = deliverlist;
},
error =>this.errorMessage = error

  );
}
deletecourier(id:number):void{
  if (confirm("Do you want to delete "))
  {
    window.location.reload();
this.deliverservice.deletecourier(id).subscribe(
()=>console.log("deleted")

);

  }
  
}

}
