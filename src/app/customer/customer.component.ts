import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  customers:Customer[];
  statusMessage: string;
  customer = new Customer();
  constructor(private _customerService: CustomerService,
    private _router : Router) { }

  ngOnInit(): void {
    this.getCustomers();

  }

  getCustomers(): void{
    this._customerService.getAllCustomers()
    .subscribe((customerData)=> this.customers=customerData,
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addCustomer():void{
    this._customerService.addCustomer(this.customer).subscribe((response)=>{console.log(response); 
      this.getCustomers(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    alert('Data Successfully Added!! :-)\n\n');
    this._router.navigate(['addVehicle']);
  }

  private reset(){
    this.customer.id=null;
    this.customer.customerName=null;
    this.customer.customerContact=null;
    this.customer.customerAddress=null;
  }

  deleteCustomer(id: string){
    console.log("Inside delete , customer id= "+id);
    this._customerService.deleteCustomer(id)
    .subscribe((response)=> {console.log(response); this.getCustomers();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteCustomer()");
  }

  getCustomer(id:string){
    this._customerService.getCustomersById(id)
    .subscribe((customerData)=>{
      this.customer = customerData;
      this.getCustomers();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }
  // onFormSubmit(){}
}
