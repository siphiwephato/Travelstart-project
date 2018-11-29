import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Payments } from '../payments/payments';
import { PaymentsService } from '../payments/payments.service';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  user: Payments;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userClaims:number;
  cars: any;


  constructor(private paymentsService: PaymentsService, private toastr: ToastrService,private userService: UserService, private router : Router) { }
  

  ngOnInit() {
    
    this.resetForm();
    
    this.userService.getUserClaims().subscribe((data: any) => {
      console.log('user id'+data.UserId)
      this.userClaims =data.UserId;
      //this.user.users_userId=data.UserId;


    });

    var cat = localStorage.getItem('myCat');
    this.cars = cat;
    
  }

  resetForm(form?: NgForm) {
   
    
    if (form != null)
      form.reset();
    this.user = {
      payments_id:null,
      users_user_id: null,
      card_no: '',
      account_no: '',
      transaction_date: '',
      amount: null,
      
      


    }
  }

  OnSubmit(form: NgForm) {
    this.paymentsService.registerUser(form.value)
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
