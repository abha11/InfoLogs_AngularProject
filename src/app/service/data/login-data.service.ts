import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/app/list-contacts/list-contacts.component';
import { User } from 'src/app/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private http:HttpClient) { }

  getUserInfo(userId){
    return this.http.get<User>('http://localhost:8080/Users/'+userId)
  }
  getAllContacts(){
    return this.http.get<Contact[]>('http://localhost:8080/Contacts')
  }

  getAllUsers(){
    return this.http.get<User[]>('http://localhost:8080/Users')
  }

  loginUser(username,project){
   return this.http.get<Number>('http://localhost:8080/Users/'+username+'/'+project)
  }

  signInUser(u:User){
    return this.http.post<string>('http://localhost:8080/Users',u)
  }

  getContacts(userId){
    return this.http.get<Contact[]>('http://localhost:8080/Contacts/userId/'+userId)
  }

  deleteContacts(id){
    return this.http.delete<Contact>('http://localhost:8080/Contacts/CId/'+id)
  }

  deleteAll(id){
    return this.http.delete<string>('http://localhost:8080/Contacts//userId/'+id)
  }

  addContact(c:Contact){
    return this.http.post<string>('http://localhost:8080/Contacts/'+c.user_Id,c)
  }

  getOneContact(id){
    return this.http.get<Contact>('http://localhost:8080/Contacts/CId/'+id)
  }

  editOneContact(c:Contact){
    return this.http.put<string>('http://localhost:8080/Contacts/'+c.contactId,c)
  }
}
