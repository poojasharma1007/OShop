import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth :AuthserviceService,private router:Router) {
    
   }
  canActivate() {
  return this.auth.username$.pipe(map(username=>{
    if(username)
    return true;
    this.router.navigateByUrl("/login") 
    return false;
  })
  )}
}
