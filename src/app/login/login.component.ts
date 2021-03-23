import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../app/services/authservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private afAuth: AuthserviceService) { }
login(){
 this.afAuth.login();
}
}
