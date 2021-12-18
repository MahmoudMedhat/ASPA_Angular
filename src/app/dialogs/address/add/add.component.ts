import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

  
  constructor(public dialogRef: MatDialogRef<AddComponent>,
    private http: HttpClient,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: address,
    private dataService: AddressService) { }

    address :address = new address;

    formGroup= new FormGroup({

      'description': new FormControl('',Validators.required)
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
 
  this.address.description=this.formGroup.get("description")?.value
  this.dataService.createAddress(this.address);
}

  ngOnInit(): void {

   
  }


}
