import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:"",component: AppComponent,pathMatch: "full"},
  {path:"Login",component: LoginComponent,pathMatch: "full"},
  {path:"Register",component: RegisterComponent,pathMatch: "full"},
  {path:"Home",component: HomeComponent,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(appRoutes);
