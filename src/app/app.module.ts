import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


// components
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent , DialogOverviewExampleDialog } from './maincontent/maincontent.component';

// for two way binding and forms
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// icons ,  Annimation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatSelectModule} from '@angular/material/select';

// Angular material dialolog model
import { MatDialogModule , MatFormFieldModule,
  MatInputModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, 
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatCheckboxModule} from '@angular/material';


// For MDB Angular Pro 
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// import { DatepickerModule, WavesModule } from 'ng-uikit-pro-standard';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';

// routing
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// social login
import * as firebase from 'firebase/app';
import { FbserviceService } from './fbservice.service';
import { GoogleplusloginService } from './googlepluslogin.service';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    DialogOverviewExampleDialog,
    AddnewtaskComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    DatePickerModule,
    ReactiveFormsModule,
   
    MDBBootstrapModule,
    MatIconModule,


    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      {path: 'todolistapp', component:MaincontentComponent}
      // { path: 'followers/:id', component: GithubprofileComponent }, { path: 'followers', component: GithubfollowersComponent },
      // { path: 'posts', component: PostsComponent },
      // { path: '**', component: NotfoundComponent },
      ])
  ],
  entryComponents:[MaincontentComponent,DialogOverviewExampleDialog],
  providers: [ FbserviceService, 
    GoogleplusloginService,    AngularFireAuthModule,
    AngularFireAuth
],
  bootstrap: [AppComponent]
})
export class AppModule { }
