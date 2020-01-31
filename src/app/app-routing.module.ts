import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  { path:'myApp' , component:HomeComponent},
  { path:'login' , component:LoginComponent},
  { path:'users' , component:UsersComponent},
  { path:'signIn' , component:SignInComponent},
  { path:'welcome' , component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path:'contacts' , component:ListContactsComponent,canActivate: [RouteGuardService]},
  { path:'addContact' , component:AddContactComponent,canActivate: [RouteGuardService]},
  { path:'editContact/:cId' , component:EditContactComponent,canActivate: [RouteGuardService]},
  { path:'logout' , component:LogoutComponent, canActivate: [RouteGuardService]},
  { path:'**' , component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
