
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Travellers } from '../book/travellers';

@Injectable()
export class BookService {


  readonly rootUrl = 'http://localhost:49412';
  constructor(private http: HttpClient) { }

  registerUser(user: Travellers) {
    const body: Travellers = {
      traveller_id: user.traveller_id,
      FisrtName: user.FisrtName,
      LastName: user.LastName,
      typeOfMeal: user.typeOfMeal,
      email: user.FisrtName,
      countryCode: user.countryCode,
      number: user.number,
      users_userId: user.users_userId
    }

   
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/travellers', body,{headers : reqHeader});
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