import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router:Router,private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(username:string, password:string) {
    return this.httpClient
      .post<any>("http://localhost:8080/login", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);   
          return userData;
        })
      );
      
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    //console.log(!(user === null));
    return !(user === null);
  }

  isUserAdmin(){
    
    let token = sessionStorage.getItem("token")?.substring(7);
    if(token){
      //console.log("token",token);
    let obj = JSON.parse(atob(token.split('.')[1]));
    return obj.role.authority==='ADMIN';
    }
    return false;
  }

  getLoggedInName(){

  let token = sessionStorage.getItem("token")?.substring(7);
    if(token){
      //console.log("token",token);
    let obj = JSON.parse(atob(token.split('.')[1]));
    return obj.name;
    }
    return "";
  }
  isUserReceptionist(){
    let token = sessionStorage.getItem("token")?.substring(7);
    if(token){
      //console.log("token",token);
    let obj = JSON.parse(atob(token.split('.')[1]));
    return obj.role.authority==='RECEPTIONIST';
    }
    return false;
  }
  isUserDoctor(){
    let token = sessionStorage.getItem("token")?.substring(7);
    if(token){
      //console.log("token",token);
    let obj = JSON.parse(atob(token.split('.')[1]));
    return obj.role.authority==='DOCTOR';
    }
    return false;
  }
  isUserPatient(){
    let token = sessionStorage.getItem("token")?.substring(7);
    if(token){
      //console.log("token",token);
    let obj = JSON.parse(atob(token.split('.')[1]));
    return obj.role.authority==='PATIENT';
    }
    return false;
  }
  logOut() {
   sessionStorage.clear();
    this.router.navigate(['admin','login']);
  }
}
