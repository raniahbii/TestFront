import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../model/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
url='api/contacts' ; 
  constructor(private _http : HttpClient) { }
  getContact(): Observable<contact[]>{
    return this._http.get<contact[]>(this.url) ; 
  }
  postContact(c : contact){
    return this._http.post(this.url,c);
  }
}
