import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../service/data/login-data.service';
import { AuthenticationService } from '../service/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

export class User{
  constructor(
  
    public UserId:string,
    public userName:string,
    public projectAssigned:string
    ){}
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  newUser:User = new User("","","");
  userPresent: boolean = false;
  created: boolean = false;
  Message:string = 'Account created!'
  constructor(
    private loginservice:LoginDataService, 
    private authenticationService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit() {

  }

  handleSignIn(){
    this.authenticationService.authenticate(this.newUser.userName,this.newUser.projectAssigned).then((res: any) => { 
      this.userPresent = true;
    }).catch((err) => {
      if(this.userPresent === false){
        this.loginservice.signInUser(this.newUser).subscribe(
          response => this.handleResponse(response),
          (error) => console.log(error)
        )
      }
    });
  }

  handleResponse(response){
    this.newUser.UserId = response
    sessionStorage.setItem('authenticatedUser',this.newUser.userName)
    sessionStorage.setItem('userId',this.newUser.UserId)
    console.log(this.newUser.UserId+' '+this.newUser.userName+'  '+ this.newUser.projectAssigned)
    this.created = true;
    setTimeout(() => {
      this.router.navigate(['welcome'])  
    }, 3000);
    
  }
}
