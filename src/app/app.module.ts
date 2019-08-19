import { DeliverListComponent } from '../deliverylist/deliverlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDeliveryComponent } from '../adddelivery/adddelivery.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from './app-routing.module';
 import { EditComponent } from '../edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { LoginComponent } from "src/login/login.component";
import { LogoutComponent } from "src/logout/logout.component";
import { AdminRegitserComponent } from "src/adminregister/adminregister.component";

@NgModule({
  declarations: [
    AppComponent,
    AddDeliveryComponent,
    DeliverListComponent,HomeComponent,EditComponent,LoginComponent,LogoutComponent, AdminRegitserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
