import { Component, OnInit } from '@angular/core';
import { Contact } from '../list-contacts/list-contacts.component';
import { LoginComponent } from '../login/login.component';
import { LoginDataService } from '../service/data/login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  Message: string = 'Contact Added!'
  contact:Contact = new Contact("","","","")
  added:boolean = false;
  constructor(private loginService:LoginDataService, private router:Router) { }

  ngOnInit() {
  }

  createContact(){
    this.contact.user_Id = sessionStorage.getItem('userId')
    this.loginService.addContact(this.contact).subscribe(
      response => this.handleResponse(),
      (error) => console.log(error)
    )

  }

  handleResponse(){
    this.added = true;
    setTimeout(() => {
      this.router.navigate(['contacts'])
    }, 3000);
  }

}
