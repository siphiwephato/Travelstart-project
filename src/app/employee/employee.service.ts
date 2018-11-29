

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

import {Employee} from '../employee/Employee';
import {Booking} from '../employee/booking';


import { Injectable }   from '@angular/core';


@Injectable()
export class EmployeeService {


    employees: Observable<Employee[]>;
    newemployee:Observable<Employee>;
  
    constructor(private http:HttpClient)
    {

    }
getEmployee()
{
 return this.http.get<Employee[]>("http://localhost:49412/api/travellers/");
}

getBookings()
{
 return this.http.get<Booking[]>("http://localhost:49412/api/bookings/");
}


AddEmployee(emp:Employee)
{

  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    FisrtName:emp.FisrtName,LastName:emp.LastName,typeOfMeal:emp.typeOfMeal,email:emp.email,countryCode:emp.countryCode,number:emp.number,
             }

return this.http.post<Employee>("http://localhost:49412/api/travellers/"+'/Employee',emp,{headers})

}


UpdateEmployee(emp:Employee)
{
    const params = new HttpParams().set('traveller_id', emp.traveller_id.toString());
  
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    FisrtName:emp.FisrtName,LastName:emp.LastName,typeOfMeal:emp.typeOfMeal,email:emp.email,countryCode:emp.countryCode,number:emp.number,traveller_id:emp.traveller_id,
             }
        return this.http.put<Employee>("http://localhost:49412/api/travellers/"+emp.traveller_id,body,{headers,params})

}







DeleteEmployee(emp:Employee)
{
    const params = new HttpParams().set('traveller_id', emp.traveller_id.toString());
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    FisrtName:emp.FisrtName,LastName:emp.LastName,typeOfMeal:emp.typeOfMeal,email:emp.email,countryCode:emp.countryCode,number:emp.number,traveller_id:emp.traveller_id,
             }
        return this.http.delete<Employee>("http://localhost:49412/api/Employes/"+emp.traveller_id)

}

}
