import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NavbarComponent } from '../../navbar/navbar.component';
import { MaincontentComponent , DialogOverviewExampleDialog } from '../..//maincontent/maincontent.component';
import { AddnewtaskComponent } from '../../addnewtask/addnewtask.component';
import { LoginComponent } from '../../login/login.component';


const routes: Routes = [
      { path: '', component: LoginComponent },
      {path: 'todolistapp', component:MaincontentComponent},
      {path:'login',component:LoginComponent}
      // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
