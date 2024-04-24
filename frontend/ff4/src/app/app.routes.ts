/*
import { Routes } from '@angular/router';

export const routes: Routes = [];
*/


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {GridDisplayComponent} from "./grid-display/grid-display.component";
import {HomeComponent} from "./home/home.component";

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'registration', component: RegistrationComponent, title: 'Register' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridDisplayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home by default
];
