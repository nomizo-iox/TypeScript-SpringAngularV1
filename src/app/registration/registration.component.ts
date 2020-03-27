import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import {UserRegistrationService} from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User ('', '', 0, '');
  message: any;

  constructor(private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
  }

  public registerNow() {
  const response = this.userRegistrationService.doRegistration(this.user);
  response.subscribe((data) => this.message = data);
  }

}
