import { Component, Injectable, OnInit } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}
  login(username: string, password: string) {
      return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
          .map((response) => {
              console.log(response);
              // login successful if there's a jwt token in the response
              const user = response.json();

              if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
              }
          });
  }

  logout() {
      localStorage.removeItem('currentUser');
  }

  loggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }
}
