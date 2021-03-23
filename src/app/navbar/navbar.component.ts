import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'; 
import { from, Observable } from 'rxjs';
import {AuthserviceService} from '../../app/services/authservice.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public afAuth: AuthserviceService) { 
  }

  ngOnInit(): void {
  }
logOut(){
  this.afAuth.logOut();
}
}
