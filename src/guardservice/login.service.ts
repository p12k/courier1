import {User} from './login'
import { HttpHeaders,HttpErrorResponse,HttpClient  } from "@angular/common/http";

import { Injectable } from "@angular/core";
import {tap, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

const httpOptions={
headers: new HttpHeaders({ 'content-type':'application/json'})
};
@Injectable({
    providedIn:'root'
})
export class Loginservice{
    constructor(private httpSer:HttpClient){}
    getAdmin(user:User){
        return this.httpSer.post("http://localhost:9167/admin/login",user)
    }
}