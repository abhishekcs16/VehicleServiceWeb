import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Service } from '../service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices:Invoice[];
  
  statusMessage: string;
  service = new Service();
  insurance = new Insurance();
  
  invoice = new Invoice();
  
 
  constructor(private _invoiceService: InvoiceService,
    private _router : Router) { }

  ngOnInit(): void {
    this.invoice.insurance=this.insurance;
    this.invoice.service=this.service;
    this.getInvoices();
  }

  getInvoices(): void{
    this._invoiceService.getAllInvoices()
    .subscribe((invoiceData)=> {this.invoices=invoiceData;
    console.log(invoiceData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addInvoice():void{
    this._invoiceService.addInvoice(this.invoice)
    .subscribe((response)=>{console.log(response); this.getInvoices(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    alert('Data Successfully Added!! :-)\n\n');
    
  }

  private reset(){
    this.invoice.invoiceId=null;
    this.invoice.labourCharges=null;
    this.invoice.serviceCharges=null;
    this.invoice.date=null;
    this.invoice.insurance.insuranceNo=null;
    this.invoice.service.serviceId=null;

  }

  deleteInvoice(invoiceId: string){
    console.log("Inside delete , invoice id= "+invoiceId);
    this._invoiceService.deleteInvoice(invoiceId)
    .subscribe((response)=> {console.log(response); this.getInvoices();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteInvoice()");
  }

  getInvoice(invoiceId:string){
    this._invoiceService.getInvoicesById(invoiceId)
    .subscribe((invoiceData)=>{
      this.invoice = invoiceData;
      this.getInvoices();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}

