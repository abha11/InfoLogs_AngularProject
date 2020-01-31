import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../list-contacts/list-contacts.component';
import { LoginDataService } from '../service/data/login-data.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id:string='';
  updated:boolean = false;
  contact:Contact = new Contact("","","","")
  Message:string = 'Contact Updated!'
  constructor(
    private route:ActivatedRoute,
    private loginService: LoginDataService,
    private router:Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['cId'] 
    this.loginService.getOneContact(this.id).subscribe(
      response=> this.contact = response,
      (error) => console.log('Cannot fetch the contact!')
    )

  }

  editContact(){
    this.loginService.editOneContact(this.contact).subscribe(
      response => console.log('Contact updated with no error!'),
      (error) => this.handleResponse()
    )
  }

  handleResponse(){
    this.updated = true;
    setTimeout(() => {
      this.router.navigate(['contacts']);
    }, 3000);
  }

}
