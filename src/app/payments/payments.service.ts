import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Payments } from '../payments/payments';

@Injectable()
export class PaymentsService {


  readonly rootUrl = 'http://localhost:49412';
  constructor(private http: HttpClient) { }

  registerUser(user: Payments) {
    const body: Payments = {
      payments_id: user.payments_id,
      users_user_id: user.users_user_id,
      card_no: user.card_no,
      account_no: user.account_no,
      transaction_date: user.transaction_date,
      amount: user.amount,
     
    }

   
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/payments', body,{headers : reqHeader});
  }

  //userAuthentication(userName, password) {
    //var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    //return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  //}

  
  //getUserClaims(){
   //return  this.http.get(this.rootUrl+'/api/GetUserClaims');
 // }

   getflights(){
     
   }

}