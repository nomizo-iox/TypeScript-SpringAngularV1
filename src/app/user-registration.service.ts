import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient: HttpClient) { }

  public doRegistration(user) {
    return this.httpClient.post('http://localhost:9191/registerUser', user, {responseType: 'text' as 'json'});
  }

  public getUsers() {
    return this.httpClient.get('http://localhost:9191/findAllUsers');
  }

  public getUserByEmail(email) {
    return this.httpClient.get('http://localhost:9191/findUser/email/' + email);
  }

  public deleteUser(id) {
    return this.httpClient.delete('http://localhost:9191/deleteUser/' + id, {responseType: 'text' as 'json'});
  }
}
