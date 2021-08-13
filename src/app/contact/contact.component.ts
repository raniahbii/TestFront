import { Component, OnInit } from '@angular/core';
import { contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  listcontact  : contact[] ;
contact : contact ; 
  constructor(private contactservice : ContactService) { }

  ngOnInit(): void {
    this.contact = new contact() ;
    this.contactservice.getContact().subscribe(res=>this.listcontact=res); 
    
  }
  save(){
    this.contactservice.postContact(this.contact).subscribe();
  }
}
