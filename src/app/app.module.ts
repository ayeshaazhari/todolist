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
  MatInputModule, } from '@angular/material';


// For MDB Angular Pro 
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// import { DatepickerModule, WavesModule } from 'ng-uikit-pro-standard';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    DialogOverviewExampleDialog,
    DatepickerComponent,
    AddnewtaskComponent,
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
    AngularFontAwesomeModule,
    DatePickerModule,
    ReactiveFormsModule,
    // WavesModule,
    MDBBootstrapModule,
  ],
  entryComponents:[MaincontentComponent,DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
