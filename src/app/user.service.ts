import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './User';


let profile = {
  userId: 0,
  username: ''
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUser(): Observable<User> {
    return of(profile);
  }
  setUser(data) {
    profile = data;
  }
}
