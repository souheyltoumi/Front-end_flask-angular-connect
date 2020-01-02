import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { LoginComponent } from './login/login.component';
import { compilePipeFromMetadata } from '@angular/compiler';
import { DashComponent } from './dash/dash.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"input",component:InputPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashborad",component:DashComponent},
  { path: '**', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
