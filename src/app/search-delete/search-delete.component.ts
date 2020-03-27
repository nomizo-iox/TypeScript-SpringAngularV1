import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any;
  email: string;
  // message: any;
  constructor(private userRegistrationService: UserRegistrationService) { }

  public deleteUser(id: number) {
    const response = this.userRegistrationService.deleteUser(id);
    response.subscribe((data) => this.users = data);
  }

  public findUserByEmail() {
    const response = this.userRegistrationService.getUserByEmail(this.email);
    response.subscribe((data) => this.users = data);
  }

  ngOnInit() {
  const response = this.userRegistrationService.getUsers();
  response.subscribe((data) => this.users = data);
  }

}
