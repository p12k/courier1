import {HttpClient} from '@angular/common/http';
import {User} from './admin'
import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root',
})

export class AdminRegitserService{
    constructor(private http:HttpClient){}

    config={headers:{
        "content-type":"application/json; charset=utf-8;"
    }
};

url="http://localhost:9167/admin/add";

adminReg(user:User){
    console.log(user);

    return this.http.post(this.url,user);
}
}