import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';


const routs : Routes =[
  {path :'Person' , component:PersonComponent},
  {path :'Address' , component:AddressComponent},
  {path :'' , component:HomeComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ]
})
export class AppRoutingModule { }
