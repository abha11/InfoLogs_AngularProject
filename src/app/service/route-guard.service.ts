import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
    if(this.authenticationService.isUserLoggedIn()){
      return true; 
    }

    //route the service to the login page
    this.router.navigate(['login'])
    return false;
    
  }

  constructor(private authenticationService: AuthenticationService, private router: Router ) { }
}
