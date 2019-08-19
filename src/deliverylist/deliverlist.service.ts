import { DeliverList } from './deliverlist.interface';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'

})

export class DeliverService{

   
   // courierUrl='/couriers';

    constructor(private httpSer:HttpClient) {
    }


    getCustomer():Observable<DeliverList[]>{
    
        return this.httpSer.get<DeliverList[]>("http://localhost:9167/couriers").pipe(
        tap(data => console.log('Deliverlist:'+JSON.stringify(data))),
        catchError(this.handleError)
    );
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
       
    }


   deletecourier(id:number):Observable<any>{

      return this.httpSer.delete<any>(`http://localhost:9167/courier/delete/${id}`);
    }
     public createUser(couriers) {
    return this.httpSer.post<DeliverList>("http://localhost:9167/couriers", couriers);
  }

}
