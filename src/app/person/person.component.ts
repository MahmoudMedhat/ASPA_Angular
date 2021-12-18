import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/Person';
import { address } from '../models/address';
import { PersonService } from '../services/person.service';
import { AddPersonComponent } from './add/add-person/add-person.component';
import { EditePersonComponent } from '../dialogs/person/Edite/edite-person/edite-person.component';
import { DeletePersonComponent } from '../dialogs/person/delete/delete-person/delete-person.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent  {

  constructor(    public dialog: MatDialog,public Services : PersonService ) { }

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  
  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  




  displayedColumns = ['id', 'name','address','actions'];
  index: number | undefined;
  id: string | undefined;
  ELEMENT_DATA: Person[] = [
  
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)

  datasource():void{

    this.Services.getAll("Person/All")
    .subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource < Person > (data); //pass the array you want in the table
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (e) => console.error(e)
    });

  
  }

  
  ngOnInit(): void {
    this.datasource();

    
  }
  addNew() {
    const dialogRef = this.dialog.open(AddPersonComponent, {
      data: {person: Person }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.datasource();
      }
    });
  }

  
  startEdit(i: number, id: string, name: string , address:address) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditePersonComponent, {
      data: {id: id, name: name , address:address}
    });  


    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.datasource();
      }
    });
}
deleteItem(i: number, id: string, name: string , address:address) {
  this.index = i;
  this.id = id;
  const dialogRef = this.dialog.open(DeletePersonComponent, {
    data: {id: id, name: name,address:address}
  });

 
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // After dialog is closed we're doing frontend updates
      // For add we're just pushing a new row inside DataService
      this.datasource();
    }
  });
}

}
