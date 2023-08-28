import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'; // Add this
import { PostsComponent } from './components/posts/posts.component'; // Add this
import { LoginComponent } from './components/login/login.component'; // Add this
import { SignupComponent } from './components/signup/signup.component'; // Add this

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
