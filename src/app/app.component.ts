import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private userService: UserService,private auth: AuthserviceService,router:Router){
  
  auth.username$.subscribe(user => {
    if(user)
    {
      userService.save(user);
      // let returnUrl=localStorage.getItem('returnUrl');
      // router.navigateByUrl(returnUrl);
    }
  })
}
}

