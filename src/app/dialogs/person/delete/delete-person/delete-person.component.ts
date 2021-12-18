import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent  {

  constructor(public dialogRef: MatDialogRef<DeletePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: PersonService) { }

onNoClick(): void {
this.dialogRef.close();
}

confirmDelete(): void {
this.dataService.deletePerson(this.data.id);

}
}
