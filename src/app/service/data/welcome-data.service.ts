import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// export class user{
//   constructor(
//     public userid:string,
//     public userName:string,
//     public project:string
//   ){}
// }

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  /*helloservice(){
    return this.http.get<user>('http://localhost:8080/Users/102')
  }*/


}
