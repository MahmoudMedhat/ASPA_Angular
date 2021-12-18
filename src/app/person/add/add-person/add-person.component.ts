import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPerson, Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';
import { AddressService } from 'src/app/services/address.service';
import { address } from 'src/app/models/address';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddPersonComponent>,
    private http: HttpClient,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Person,
    private dataService: PersonService,
    public AddressService : AddressService) { }

    person :AddPerson = new AddPerson;
    addresss : address[] =[];

    formGroup= new FormGroup({

      'name': new FormControl('',Validators.required),
      'address': new FormControl('',Validators.required)
    })



getErrorMessage() {
  return this.formGroup.hasError('required') ? 'Required field' :
    this.formGroup.hasError('email') ? 'Not a valid email' :
      '';
}

submit() :void {
console.log(this.formGroup.value)
}

onNoClick(): void {
  this.dialogRef.close();
}

public confirmAdd(): void {
 
  this.person.name=this.formGroup.get("name")?.value
  this.person.addressId=this.formGroup.get("address")?.value
  console.log(this.person)
   this.dataService.createPerson(this.person);

}

  ngOnInit(): void {

    this.AddressService.getAll("Person/All")
    .subscribe({
      next: (data) => {
        this.addresss = data
      },
      error: (e) => console.error(e)
    });
  }



}
