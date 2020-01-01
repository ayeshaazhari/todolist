import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ){ }
 

  canActivate(){
    if(!this.authService.isLoggedIn) {
      window.alert("Please Login. If new user please register.");
       this.router.navigate(['login']);
       return false;
    }
    
    return true;
  }

  
  
}
