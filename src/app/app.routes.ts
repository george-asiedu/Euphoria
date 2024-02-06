import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomePageComponent } from './home-components/home-page/home-page.component';
import { HomeComponent } from './categories/men/home/home.component';


export const routes: Routes = [
    {
        path: '',
        title: 'Euphoria - Home Page',
        component: HomePageComponent
    },
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
        path: 'men',
        title: 'Euphoria - Men Product Page',
        component: HomeComponent
    }
];
