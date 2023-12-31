import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service'; // Add this

import { HomeComponent } from './components/home/home.component'; // Add this
import { PostsComponent } from './components/posts/posts.component'; // Add this
import { LoginComponent } from './components/login/login.component'; // Add this
import { SignupComponent } from './components/signup/signup.component'; // Add this

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
