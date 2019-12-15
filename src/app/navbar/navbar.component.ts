import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

// import { GoogleplusloginService } from '../googlepluslogin.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  photoURL;
  name;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.photoURL = this.user.photoURL;
    this.name = this.user.displayName;
  }

  logout() {
    // this.gService.googlelogout();
    }

}
