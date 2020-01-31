import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../service/data/login-data.service';
import { Router } from '@angular/router';


export class Contact{
  constructor(
  
    public contactId:string,
    public contactName:string,
    public phNumber:string,
    public user_Id: string

    ){}
} 
@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  history:Contact[];
  id:string;
  name:string;
  deleted:boolean = false;
  adminLogin:boolean  = false;
  errorMessage:string = 'No contacts to display!!'
  constructor(private loginService:LoginDataService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('authenticatedUser') === "Admin"){
      this.name = sessionStorage.getItem('authenticatedUser')
      this.getAllContacts();
    }else{
      this.getHistory();
    }
    
  }

  getAllContacts(){
    this.loginService.getAllContacts().subscribe(
      response=>this.history=response,
      (error) => console.log('Unable to fetch the contacts!')
    )
  }

  getHistory(){
    this.name = sessionStorage.getItem('authenticatedUser')
    this.id = sessionStorage.getItem('userId')
    this.loginService.getContacts(this.id).subscribe(
      response => this.handleResponse(response),
      (error) => this.deleted = true
    )
  }
  handleResponse(response){
    this.history=response
    console.log('Recieved the contacts')
    this.deleted=false
    //console.log(this.history[0].contactId+'   '+ this.history[0].contactName)
  }

  deleteContact(c:Contact){
    this.loginService.deleteContacts(c.contactId).subscribe(
      data => this.history = this.history.filter(u => u!==c))
  }

  deleteAllContacts(uid){
    this.loginService.deleteAll(uid).subscribe(
      response=>this.deleted = true
    )
  }
  editContact(c:Contact){
    this.router.navigate(['editContact',c.contactId])
  }


}
