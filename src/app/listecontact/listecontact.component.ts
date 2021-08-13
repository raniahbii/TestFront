import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listecontact',
  templateUrl: './listecontact.component.html',
  styleUrls: ['./listecontact.component.css']
})
export class ListecontactComponent implements OnInit {

  columnDefs = [
    {headerName : "nom" , field : "nom" , sortable : true , filter : true} , 
    {headerName : "prenom" , field : "prenom" , sortable : true , filter : true}  , 
    {headerName : "date de naissance" , field : "datenaissance" , sortable : true , filter : true , resizable : true} 

  ] ; 
  rowData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.rowData = this.http.get( "http://localhost:3000/contacts");
  }
}
