import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

//components
import { NavbarComponent } from '../../navbar/navbar.component';
import { MaincontentComponent , DialogOverviewExampleDialog } from '../..//maincontent/maincontent.component';
import { AddnewtaskComponent } from '../../addnewtask/addnewtask.component';
import { LoginComponent } from '../../login/login.component';
import { AuthGuard } from '../services/authguard.service';
import { SignupComponent } from 'src/app/signup/signup.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { ForgetpasswordComponent } from 'src/app/forgetpassword/forgetpassword.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';



const routes: Routes = [
      // {path: '',component: MaincontentComponent,canActivate:[AuthGuard]},
      // { path: '', redirectTo: 'todolistapp',pathMatch: 'full'},
      { path: '', component: LoginComponent },
      {path: 'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'verify-email',component:VerifyEmailComponent},
      {path:'forgot-password',component:ForgetpasswordComponent},
      {path: 'todolistapp', component:MaincontentComponent },
      {path:'dashboard', component:DashboardComponent},
      { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

