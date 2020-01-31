import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { User } from '../sign-in/sign-in.component';
import { LoginDataService } from '../service/data/login-data.service';
//import { user } from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//export implies that we can use this class outside its module
export class WelcomeComponent implements OnInit {

  message = 'Welcome to the home page!'
  presentUser = ''
  userid= ''
  user : User = new User("","","")
  constructor(private route:ActivatedRoute, private loginService:LoginDataService) { 

  }

  ngOnInit() {
    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.presentUser = sessionStorage.getItem('authenticatedUser')
    if(this.presentUser === "Admin"){

      this.userid='Private'
      this.user.userName='Admin'
      this.user.projectAssigned = 'Currently working in 8x8'
      this.message= "Hello Admin!"
    }else{
      this.userid = sessionStorage.getItem('userId')
      this.loginService.getUserInfo(this.userid).subscribe(
        response=> this.user = response,
        (error) => console.log('Unable to fetch the data!')
      )
    }
  }
}
