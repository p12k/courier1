import { DeliverListComponent } from '../deliverylist/deliverlist.component';
import { AddDeliveryComponent } from '../adddelivery/adddelivery.component';
import { NgModule } from '@angular/core';
import {  CanActivate, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EditComponent } from '../edit/edit.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthGaurdService } from '../guardservice/authguard.service';
import { AdminRegitserComponent } from "src/adminregister/adminregister.component";

    const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent,canActivate:[AuthGaurdService]},
    {path:'add',component:AddDeliveryComponent,canActivate:[AuthGaurdService]},
    {path:'view',component:DeliverListComponent,canActivate:[AuthGaurdService]},
    {path:'login',component:LoginComponent,},
    {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
    {path:'edit',component:EditComponent},
    {path:'adminregister',component:AdminRegitserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
