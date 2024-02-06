import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomePageComponent } from './home-components/home-page/home-page.component';
import { MenProductsComponent } from './categories/men-products/men-products.component';


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
        component: MenProductsComponent
    }
];
