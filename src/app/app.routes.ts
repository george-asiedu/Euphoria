import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'DripLuxury Closet - Signup Page',
        component: SignupComponent
    },
    {
        path: 'signin',
        title: 'DripLuxury Closet - Signin Page',
        component: SigninComponent
    }
];
