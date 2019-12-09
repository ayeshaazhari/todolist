import { Component, OnInit } from '@angular/core';
// import { GoogleplusloginService } from '../googlepluslogin.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor() { }

  ngOnInit() {
    // this.gService.user$.subscribe(user=> {
    //   this.user = user;
    //   });
  }

  logout() {
    // this.gService.googlelogout();
    }

}
