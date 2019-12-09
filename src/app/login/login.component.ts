import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleplusloginService } from '../googlepluslogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private router: Router,private gService:GoogleplusloginService) { }

  ngOnInit() {
    this.gService.user$.subscribe(user=> {
      this.user = user;
      });
  }
// login
  submit(values){
    console.log(values.value);
    this.router.navigate(['/todolistapp']);
  }

  // google sign in

  loginGoogle() {
    // this.router.navigate(['/todolistapp']);

    var a = this.gService.googlelogin();
    console.log(a);
    this.router.navigate(['/todolistapp']);
    }

  logout() {
    this.gService.googlelogout();
    }

}
