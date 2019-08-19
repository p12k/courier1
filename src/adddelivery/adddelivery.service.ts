
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { User } from "../adddelivery/adddelivery";
import { ActivatedRoute, Router } from "@angular/router";
import { AddDeliveryComponent } from "src/adddelivery/adddelivery.component";
import { NgForm } from "@angular/forms";

@Injectable({
providedIn:'root'
})
export class AddDeliveryservice{

        constructor(private http : HttpClient){

    }
    config = {headers : {
            "Content-Type": "application/json; charset = utf-8;"
        }
    };

    url='http://localhost:9167/courier/couriers';

    enroll(user : User){ 

        console.log(user);
       
        return this.http.post(this.url, user);
    }
}






 






