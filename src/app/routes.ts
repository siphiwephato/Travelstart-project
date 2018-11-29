import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import {SearchComponent} from'./search/search.component';

import {BookComponent} from './book/book.component';
import {Book2Component} from './book2/book2.component';
import {Book3Component} from './book3/book3.component';
import {Book4Component} from './book4/book4.component';
import {PaymentsComponent} from './payments/payments.component';
import {EmployeeComponent} from './employee/employee.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'search', component: UserComponent,
        children: [{ path: '', component: SearchComponent }]
    },
   
    {
        path: 'book', component: UserComponent,
        children: [{ path: '', component: BookComponent }]
    },
    {
        path: 'book2', component: UserComponent,
        children: [{ path: '', component: Book2Component }]
    },
    {
        path: 'book3', component: UserComponent,
        children: [{ path: '', component: Book3Component }]
    },
    {
        path: 'book4', component: UserComponent,
        children: [{ path: '', component: Book4Component }]
    },
     {
        path: 'payments', component: UserComponent,
        children: [{ path: '', component: PaymentsComponent }]
    },
    {
        path: 'employee', component: UserComponent,
        children: [{ path: '', component: EmployeeComponent }]
    },

    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];