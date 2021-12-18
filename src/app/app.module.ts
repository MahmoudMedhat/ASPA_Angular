import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { HttpClientModule ,HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MaterialModule} from './material-module';
import { AddComponent } from './dialogs/address/add/add.component';
import { DeleteComponent } from './dialogs/address/delete/delete.component';
import { EditeComponent } from './dialogs/address/edite/edite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './person/add/add-person/add-person.component';
import { EditePersonComponent } from './dialogs/person/Edite/edite-person/edite-person.component';
import { DeletePersonComponent } from './dialogs/person/delete/delete-person/delete-person.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddressComponent,
    AddComponent,
    DeleteComponent,
    EditeComponent,
    AddPersonComponent,
    EditePersonComponent,
    DeletePersonComponent,
    HomeComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
   
    HttpClientModule,
    
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
    RouterModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
