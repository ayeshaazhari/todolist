import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

// import { GoogleplusloginService } from '../googlepluslogin.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isdashboard:string;
  @Input() ishomepage:string;

  user;
  photoURL;
  name;
  userdata;
  constructor(public authservice:AuthService) { 
    this.userdata = authservice.userData;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userdata = this.authservice.userData;
    this.photoURL = this.userdata.photoURL;
    this.name = this.user.displayName;
  }

  logout() {
    this.authservice.signOut();
    }

}
