import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';

export interface AuthResponseData {
  "id": number,
 "username": string,
 "email": string,
 "firstName": string,
  "lastName": string,
 "gender": string,
 "image": string,
"token":string
 }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user = new BehaviorSubject<User>(null);
  constructor(private http :HttpClient) { }

  logIn(username: string, password: string) {
    const postData = { username: username, password: password };


    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

   return this.http.post<AuthResponseData>(environment.basicApi +'auth/login' ,postData
   , {
     headers: headers,

   }

   ).pipe(tap(response => {
     this.AuthenticationUser(
       response.id,
       response.username,
       response.email,
       response.firstName,
       response.lastName,
       response.token
     );
   }))
  }

  //// authentication for user
  private AuthenticationUser(
    id: number,
    username:string,
    email: string,
    firstName: string,
    lastName: string,
    token: string,
 ) {



          const user = new User(id,username,email,firstName,lastName,token);
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user))

  };

  /////

autoLogin() {
    const userData: {
    id: number,
    username:string,
    email: string,
    firstName: string,
    lastName: string,
    token: string,
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

  const loadedUser = new User(
    userData.id,
    userData.username,
    userData.email,
    userData.firstName,
    userData.lastName,
  userData.token)




    if (loadedUser.token) {
      this.user.next(loadedUser)

     }
  }

}
