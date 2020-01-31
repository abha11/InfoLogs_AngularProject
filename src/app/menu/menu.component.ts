import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser:string = ''
  constructor(private authenticationService : AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.currentUser = sessionStorage.getItem('authenticatedUser')
  }
  welcome(){
    this.router.navigate(['welcome',this.currentUser])
  }

}
