import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


// components

import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent , DialogOverviewExampleDialog } from './maincontent/maincontent.component';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';
import { LoginComponent } from './login/login.component';


//service
import { AuthService } from "./shared/services/auth.service";


// for two way binding and forms
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

// icons ,  Annimation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Angular material dialolog model
import { 
  MatDialogModule , 
  MatFormFieldModule,
  MatInputModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, 
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSelectModule,
  MatNativeDateModule
  // MatMomentDateModule
} from '@angular/material';


// For MDB Angular Pro 
import { MDBBootstrapModule } from 'angular-bootstrap-md';



// routing
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { RouterModule } from '@angular/router';


// social login
import * as firebase from 'firebase/app';
import { FbserviceService } from './fbservice.service';




@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
  MaincontentComponent,
  DialogOverviewExampleDialog,
  AddnewtaskComponent,
  LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    AngularFontAwesomeModule,

    ReactiveFormsModule,
    DatePickerModule,
    
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatButtonModule,   
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //  MatMomentDateModule,
    

    MDBBootstrapModule
  ],
  entryComponents:[MaincontentComponent,DialogOverviewExampleDialog],
  providers: [ FbserviceService, 
    AngularFireAuthModule,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
