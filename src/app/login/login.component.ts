import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { LoginDataService } from '../service/data/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  project=''
  invalidLogin=false
  //errorMessage = 'Invalid Credentials'
  //userId: number
  constructor(private router:Router, private authenticationService: AuthenticationService, private loginService: LoginDataService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="Admin" && this.project==="Admin"){
      sessionStorage.setItem('authenticatedUser',"Admin")
      this.router.navigate(['welcome'])
    }else{
      this.authenticationService.authenticate(this.username,this.project).then((res: any) => { 
        //console.log("***********", res);
        //console.log("####");
        this.router.navigate(['welcome'])
        this.invalidLogin=false;
      }).catch((err) => {
        this.invalidLogin=true;
        console.error(err);
      });
    }
     
  }
/*
  handleError(error){
    this.errorMessage = error.error.message
  }

  handleResponse(response){
    this.userId = response
  }
*/
}
