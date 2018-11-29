


import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {EmployeeService} from '../employee/employee.service';
import {Employee} from '../employee/Employee';
import {Booking} from '../employee/booking';
import {UserService } from '../shared/user.service';


import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  userClaims:any;
FisrtName:string="";
LastName:string="";
typeOfMeal:string="";
traveller_id:number=0;
email:string="";
countryCode:string="";
  number:string="";
  status:boolean=false;
  FormHeader=""
  editCustomer:boolean=false;
  employees:Observable<Employee[]>
test:any[];
  employeelist:Employee[];
  bookinglist:Booking[];
mappedlist:Employee[]=[];
  Dummyemployee:Employee;
  constructor(private dataservice:EmployeeService,private userService:UserService)
   { 
   }
  ngOnInit()
   {
     this.dataservice.getEmployee().subscribe((tempdate) =>{  this.employeelist=tempdate;})
     ,err=>{
       console.log(err);
     }

     this.dataservice.getBookings().subscribe((tempdate) =>{  this.bookinglist=tempdate;})
     ,err=>{
       console.log(err);
     }

     this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      localStorage.setItem('flights_Name',data.flights_Name);
   
    
    });
   }
  ShowRegForm=function(employe)
  {
    this.editCustomer=true;
    if(employe!=null)
    {
      this.SetValuesForEdit(employe)
    
    }
    else{
      this.ResetValues();
    }
  }


  ShowRegFormForDelete=function(employee)
  {
    this.editCustomer=true;
    if(employee!=null)
    {
      this.SetValuesForDelete(employee)
    
    }
  }

  SetValuesForDelete=function(employee)
{
  this.fname=employee.Fname;
  this.lname=employee.Lname;
  this.email=employee.email;
  this.id=employee.id;
  this.FormHeader="Delete"
  
}
//Function to set the values for edit form
SetValuesForEdit=function(employee)
{
  this.traveller_id=employee.traveller_id;
  this.FisrtName=employee.FisrtName;
  this.LastName=employee.LastName;
  this.typeOfMeal=employee.typeOfMeal;


  this.email=employee.email;
  this.countryCode=employee.countryCode;
  this.number=employee.number;

  this.FormHeader="Edit"
}
//Function to reset the values 
ResetValues(){
  this.FisrtName="";
  this.LastName="";
  this.typeOfMeal="";
  this.traveller_id = 0;
  this.typeOfMeal="";
  this.email="";
  this.countryCode="";
  this.number = "";
  this.FormHeader="Add"
}
//Common function for the Operation 
  Save(regForm:NgForm)
  {
    this.GetDummyObject(regForm);

    switch(this.FormHeader)
    {
    case "Add":
           this.Addemployee(this.Dummyemployee);
    break;
    case "Edit":
          this.UpdateEmployee(this.Dummyemployee);
    break;
    case "Delete":
          this.DeleteEmployee(this.Dummyemployee);
    break;
           default:
    break;

    }
  }


GetDummyObject(regForm:NgForm):Employee
{
  this.Dummyemployee= new Employee
  this.Dummyemployee.traveller_id=regForm.value.traveller_id;

  this.Dummyemployee.FisrtName=regForm.value.FisrtName;
  this.Dummyemployee.LastName=regForm.value.LastName;
  this.Dummyemployee.typeOfMeal=regForm.value.typeOfMeal;
  this.Dummyemployee.email=regForm.value.email;
  this.Dummyemployee.countryCode=regForm.value.countryCode;
  this.Dummyemployee.number=regForm.value.number;

  return this.Dummyemployee;
}
  Addemployee(e: Employee)
  {
    this.dataservice.AddEmployee(this.Dummyemployee).subscribe(res=>
      {
        this.employeelist.push(res);
        alert("Data added successfully !! ")
        this.editCustomer=false;
      })
      ,err=>
      {
        console.log("Error Occured " + err);
      }
  }


  UpdateEmployee(e: Employee)
  {
    this.dataservice. UpdateEmployee(this.Dummyemployee).subscribe(res=>
      {
          this.editCustomer=false;
          this.dataservice.getEmployee().subscribe(res=>{
          this.employeelist=res;
          });
          alert("Employee data Updated successfully !!")
      });
  }

  DeleteEmployee(e: Employee)
  {
    this.dataservice.DeleteEmployee(this.Dummyemployee).subscribe(res=>
      {
        this.editCustomer=false;
      this.dataservice.getEmployee().subscribe(res=>{
                this.employeelist=res;
        });
        alert("employee Deleted succesfully !! ")
      });
  }


}


