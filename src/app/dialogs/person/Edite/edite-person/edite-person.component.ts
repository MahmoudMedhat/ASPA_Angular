import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { address } from 'src/app/models/address';
import { AddPerson, Person } from 'src/app/models/Person';
import { AddressService } from 'src/app/services/address.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edite-person',
  templateUrl: './edite-person.component.html',
  styleUrls: ['./edite-person.component.css']
})
export class EditePersonComponent {

  constructor(public dialogRef: MatDialogRef<EditePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public AddressService: AddressService,
     private DataServices :PersonService) { }

     addresss : address[] =[];
     AddPerson : AddPerson = new AddPerson();

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {
// emppty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

stopEdit(): void {
  
  this.AddPerson.id = this.data.id;
  this.AddPerson.name = this.data.name;
  this.AddPerson.addressId = this.data.address.id;
   this.DataServices.editePerson(this.AddPerson);

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
