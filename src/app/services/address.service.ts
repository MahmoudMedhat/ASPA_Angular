import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {environment} from '../../environments/environment'
import { address } from '../models/address';
import {  catchError, Observable, of, throwError } from 'rxjs';

const headers={
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  private readonly baseUrl;
  errorMsg!: string;
  constructor(private http: HttpClient) {
    
    this.baseUrl = "https://localhost:44323/api/Address/";
  }

  getAll(url:string): Observable<address[]> {
    return this.http.get<address[]>(this.baseUrl+"all");
  }
  
  createAddress(address: any) {
    
  
    this.http.post(this.baseUrl+'Post',address,headers).subscribe(
      (error) => console.log(error)
    )     
  }  

 editeAddress(address: any){

  this.http.put(this.baseUrl+'Edite' , address, headers).subscribe(
    (error) => console.log(error)
  )
 }
deleteAddress(id:string){

  this.http.delete(this.baseUrl+'Delete/'+id).subscribe(

    (error) => console.log(error)
  )
}
  
}
