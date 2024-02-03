import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'Euphoria - Signup Page',
        component: SignupComponent
    },
    {
        path: 'signin',
        title: 'Euphoria - Signin Page',
        component: SigninComponent
    },
    {
        path: '',
        title: 'Euphoria - Home Page',
        component: HomePageComponent
    }
];
