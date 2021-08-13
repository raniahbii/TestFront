import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import {AgGridModule} from 'ag-grid-angular' ; 
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { ListecontactComponent } from './listecontact/listecontact.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api' ; 
import { InMemoryDataService } from './model/InMemoryDataService';






@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ListecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AgGridModule.withComponents() 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
