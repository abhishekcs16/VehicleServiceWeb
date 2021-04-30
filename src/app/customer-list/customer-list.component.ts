import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerContact:any;
  customer = new Customer();
  statusMessage : string;
  customers: Customer[];

  constructor(private _customerService:CustomerService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getCustomers();
  }

  getCustomers(): void{
    console.log("Inside getCustomers()");
    this._customerService.getAllCustomers()
    .subscribe((customerData)=> this.customers= customerData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getCustomers()");
  }
  Search(){
    if(this.customerContact ==""){
      this.ngOnInit();
    }else{
      this.customers= this.customers.filter(res =>{
        return res.customerContact.toLocaleLowerCase().match(
          this.customerContact.toLocaleLowerCase())
      })
      }
    }

}



