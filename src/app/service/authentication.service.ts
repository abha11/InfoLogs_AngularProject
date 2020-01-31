import { Injectable } from '@angular/core';
import { LoginDataService } from './data/login-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 // errorMessage=''
 // userid : Number = 0
 // check: Boolean = false
  constructor( private loginService: LoginDataService) { }

  test(username, project): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loginService.loginUser(username,project).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {reject(error)}
      ) // this.handleError(error)
    });
  }
  async authenticate(username, project){
    let uid = await this.test(username, project);                    //If the test function results in a rejection then the further code will not run and directly go to login.component.ts for catch.
    console.log("User Id=",uid);
    sessionStorage.setItem('authenticatedUser',username)
    sessionStorage.setItem('userId',String(uid))
    //return true;
    // return this.test(username, project).then((res) => {
    //   this.userid = res;
    //   sessionStorage.setItem('authenticatedUser',username)
    //   sessionStorage.setItem('userId',String(this.userid))
    //   return Promise.resolve(true);
    // }).catch((err) => {
    //   console.error("No user id exists for this username..!!");
    //   console.error(err);
    //   return Promise.reject();
    // })
    // // Promise.resolve("ok").then(() => {
    //  this.loginService.loginUser(username,project).subscribe(
    //    response => this.userid = response,
    //    error => this.handleError(error)
    //  )
    //}).
    // await this.loginService.loginUser(username,project).subscribe(
    //   response => this.userid = response,
    //   error => this.handleError(error)
    // )
      //setTimeout(() => {
        // console.log('userid in function-'+this.userid)
        // if(this.userid!==0 && this.errorMessage===''){
        //   sessionStorage.setItem('authenticatedUser',username)
        //   sessionStorage.setItem('userId',String(this.userid))
        //   //return true;
        //   this.check = true
        // }
        //return false;
        //this.check = false
      //}, 2000);
      //console.log('userid after function in 2000ms-'+this.userid)

     // return this.check
    }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    if(user !== null){
      return true;
    }
    return false;

  }

  logout(){
    sessionStorage.clear()
  }

  isAdminLoggedIn(){
    if(sessionStorage.getItem('authenticatedUser') === 'Admin'){
      return true;
    }
    else{
      return false;
    }
  }
  /*handleError(error){
    this.errorMessage = error.error.message
  }

  handleResponse(response){
    this.userid = response
    console.log('user-'+this.userid)
    return this.userid
  }*/

}
