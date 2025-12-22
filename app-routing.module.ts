import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPage } from './front/front.page';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
  {
    path: 'front',
    loadComponent: () => import('./front/front.page').then(m => m.FrontPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'order-confirmation',
    loadComponent: () => import('./order-confirmation/order-confirmation.page').then(m => m.OrderConfirmationPage)

}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
