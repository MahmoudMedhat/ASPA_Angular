import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddComponent } from '../dialogs/address/add/add.component';
import { DeleteComponent } from '../dialogs/address/delete/delete.component';
import { EditeComponent } from '../dialogs/address/edite/edite.component';
import { address } from '../models/address';
import { AddressService } from '../services/address.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';

 
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent  {

  constructor(    public dialog: MatDialog,public Services : AddressService) { }
  // @ViewChild(MatPaginator, { static: true })


  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  
  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  




  displayedColumns = ['id', 'description','actions'];
  index: number | undefined;
  id: string | undefined;
  ELEMENT_DATA: address[] = [
  
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)

  datasource():void{

    this.Services.getAll("Address/All")
    .subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource < address > (data); //pass the array you want in the table
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (e) => console.error(e)
    });

  
  }

  // public loadData() {
  //   this.exampleDatabase = new DataService(this.httpClient);
  //    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
  //   fromEvent(this.filter.nativeElement, 'keyup')
  //     // .debounceTime(150)
  //     // .distinctUntilChanged()
  //     .subscribe(() => {
  //       if (!this.dataSource) {
  //         return;
  //       }
  //       this.dataSource.filter = this.filter.nativeElement.value;
  //     });
  // }
  ngOnInit(): void {
    this.datasource();

    
  }
  addNew() {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {address: address }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.datasource();
      }
    });
  }

  
  startEdit(i: number, id: string, description: string) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditeComponent, {
      data: {id: id, description: description}
    });  


    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.datasource();
      }
    });
}
deleteItem(i: number, id: string, description: string) {
  this.index = i;
  this.id = id;
  const dialogRef = this.dialog.open(DeleteComponent, {
    data: {id: id, description: description}
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
