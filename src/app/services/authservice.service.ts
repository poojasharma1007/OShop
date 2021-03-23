import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  username$:Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth,private router:Router,private userservice:UserService) {
    this.username$=afAuth.authState;
   }
  login(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  logOut(){
    this.afAuth.auth.signOut()
    .then(() => {
      this.router.navigate(['login']);
     })
  }
}
