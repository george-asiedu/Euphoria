import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'DripLuxury Closet - Signup Page',
        component: SignupComponent
    }
];
