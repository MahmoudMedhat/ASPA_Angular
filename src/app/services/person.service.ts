import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

const headers={
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly baseUrl;
  errorMsg!: string;
  constructor(private http: HttpClient) {
    
    this.baseUrl = "https://localhost:44323/api/Person/";
  }

  getAll(url:string): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl+"all");
  }
  
  createPerson(person: any) {
    
  
    this.http.post(this.baseUrl+'Post',person,headers).subscribe(
      (error) => console.log(error)
    )     
  }  

 editePerson(person: any){

  this.http.put(this.baseUrl+'Edite' , person, headers).subscribe(
    (error) => console.log(error)
  )
 }
deletePerson(id:string){

  this.http.delete(this.baseUrl+'Delete/'+id).subscribe(

    (error) => console.log(error)
  )
}
}
