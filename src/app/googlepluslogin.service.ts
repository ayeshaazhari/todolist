import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class GoogleplusloginService {
user$: Observable<firebase.User>;
constructor(private afAuth:AngularFireAuth) {
this.user$ = afAuth.authState;
}
googlelogin() {
return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}
googlelogout() {
  this.afAuth.auth.signOut();
  }
}
