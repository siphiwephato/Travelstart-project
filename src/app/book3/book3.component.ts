
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Travellers } from '../book/travellers';
import { BookService } from '../book/book.service';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book3',
  templateUrl: './book3.component.html',
  styleUrls: ['./book3.component.css']
})
export class Book3Component implements OnInit {

  user: Travellers;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userClaims:number;
  cars: number;


  constructor(private bookService: BookService, private toastr: ToastrService,private userService: UserService, private router : Router) { }
  

  ngOnInit() {
    
    this.resetForm();
    
    this.userService.getUserClaims().subscribe((data: any) => {
      console.log('user id'+data.UserId)
      this.userClaims =data.UserId;
      this.user.users_userId=data.UserId;


    });
    
  }

  resetForm(form?: NgForm) {
   
    
    if (form != null)
      form.reset();
    this.user = {
      traveller_id:null,
      FisrtName: '',
      LastName: '',
      typeOfMeal: '',
      email: '',
      countryCode: '',
      number:'',
      users_userId:null
      


    }
  }

  OnSubmit(form: NgForm) {
    this.bookService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
          
        }
        else
          this.toastr.error(data.Errors[0]);
      });
      this.router.navigate(['/payments']);

      
  }



}
