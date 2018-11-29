import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SearchService } from './search/search.service';

import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { PaymentsService } from './payments/payments.service';
import { EmployeeService } from './employee/employee.service';

import { Book2Component } from './book2/book2.component';
import { Book3Component } from './book3/book3.component';
import { Book4Component } from './book4/book4.component';
import { PaymentsComponent } from './payments/payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { Book5Component } from './book5/book5.component';
import { Book6Component } from './book6/book6.component';
import { Book7Component } from './book7/book7.component';
import { Book8Component } from './book8/book8.component';
import { Book9Component } from './book9/book9.component';
import { Book10Component } from './book10/book10.component';
//import { FlightsComponent } from './flights/flights.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    SearchComponent,
    //FlightsComponent,
    BookComponent,
    Book2Component,
    Book3Component,
    Book4Component,
    PaymentsComponent,
    DashboardComponent,
    EmployeeComponent,
    Book5Component,
    Book6Component,
    Book7Component,
    Book8Component,
    Book9Component,
    Book10Component,
    //FlightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard,SearchService,BookService,PaymentsService,EmployeeService,
    ,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
