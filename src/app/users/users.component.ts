import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../service/data/login-data.service';
import { User } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  getUsers : User[];
  errorMessage:string = ''
  constructor(private loginService:LoginDataService) { }

  ngOnInit() {
    this.loginService.getAllUsers().subscribe(
      response=> this.handleResponse(response),
      (error)=> this.errorMessage = 'Unable To Fetch The Users List!'
    )

  }

  handleResponse(response){
    this.getUsers=response
   // console.log(this.getUsers[0].UserId)
    console.log('Recieved the users')
  }

}
