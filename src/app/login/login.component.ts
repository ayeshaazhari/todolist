import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";

// import { GoogleplusloginService } from '../googlepluslogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  login = true;
  constructor(public authService: AuthService , private router:Router) { }

  ngOnInit() {
    // this.gService.user$.subscribe(user=> {
    //   this.user = user;
    //   });
  }
// login
  submit(values){
    console.log(values.value);
    this.router.navigate(['/todolistapp']);
  }

  register(){
    this.login= !this.login;
  }


  // google sign in

  //  loginGoogle() {

  //    this.gService.googlelogin();
  //   this.router.navigate(['/todolistapp']);
  //   }

  // logout() {
  //   this.gService.googlelogout();
  //   }

}
