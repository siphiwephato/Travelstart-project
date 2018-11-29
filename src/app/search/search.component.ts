import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search/search.service';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs/Observable';
import {NgForm, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
//import {NgModule} from '../app.module'

import {Search} from '../search/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [SearchService]

})

  








export class SearchComponent implements OnInit {
  cars:string="";
 data:any;
  userClaims: any;
  flights_Name:string="";
  from_Location:string="";
  to_Location:string="";
  departure_Date:string="";
  arrival_Date:string="";
  results:number =null;
  num1: string="";
  num2:string ="";
  total_Seats:number=null;
   available_Seats:number=null;
  price:number=0;
  total:string="";
   pric:string;
  FormHeader="";
  editCustomer:boolean=false;
  employees:Observable<Search[]>
test:any[];
  employeelist:Search[];
mappedlist:Search[]=[];
  Dummyemployee:Search;
  form: FormGroup;

  constructor(private SearchService:SearchService, private userService:UserService, private router : Router ) { }
  //private userService : UserService,private router : Router

  ngOnInit() 
  {
    
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      localStorage.setItem('flights_Name',data.flights_Name);
   
    
    });

       
   

   
  




   
    

  
 
  }

  onSubmit = function(form: NgForm)
  {
    this.from_Location = ((document.getElementById("from_Location") as HTMLInputElement).value);
    this.cars = ((document.getElementById("cars") as HTMLInputElement).value);

 
  this.SearchService.getEmployee(this.from_Location);
  this.SearchService.getEmployee(this.cars);



  //this.SpotifyService.getEmployee(this.Fname).Observable((tempdate) =>{  this.employeelist=tempdate;})
//,err=>{
  //console.log(err);

    }
   
  
  

    onSubmit2 = function()
    {
      this.router.navigate(['/employee']);

    }
    onSubmit3 = function(form: NgForm)
    {
      if (this.cars == "1")
      {
        this.pric = ((document.getElementById("price") as HTMLInputElement).value);

        //var pri = ((document.getElementById("cars") as HTMLInputElement).value);
       //((document.getElementById("price") as HTMLInputElement).value);
          //this.pric = parseInt(pri);
         this.total =this.pric;
        localStorage.setItem('myCat',this.total);
        

        
    

       
      this.router.navigate(['/book']);
       
   
      }
      if (this.cars == "2")
      {

        this.pric = ((document.getElementById("price") as HTMLInputElement).value);

        //var pri = ((document.getElementById("cars") as HTMLInputElement).value);
       //((document.getElementById("price") as HTMLInputElement).value);
          //this.pric = parseInt(pri);
         this.total =this.pric * 2;
        localStorage.setItem('myCat',this.total);
         
       this.router.navigate(['/book2']);
   
      }
      if (this.cars == "3")
      {
        this.pric = ((document.getElementById("price") as HTMLInputElement).value);

        //var pri = ((document.getElementById("cars") as HTMLInputElement).value);
       //((document.getElementById("price") as HTMLInputElement).value);
          //this.pric = parseInt(pri);
         this.total =this.pric * 3;
        localStorage.setItem('myCat',this.total);
       this.router.navigate(['/book4']);
   
      }
      if (this.cars == "4")
      {
        this.pric = ((document.getElementById("price") as HTMLInputElement).value);

        //var pri = ((document.getElementById("cars") as HTMLInputElement).value);
       //((document.getElementById("price") as HTMLInputElement).value);
          //this.pric = parseInt(pri);
         this.total =this.pric * 4;
        localStorage.setItem('myCat',this.total);
       this.router.navigate(['/book7']);
   
      }

    }
}


