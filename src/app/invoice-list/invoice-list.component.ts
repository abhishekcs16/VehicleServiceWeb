import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoice = new Invoice();
  statusMessage : string;
  invoices: Invoice[];

  constructor(private _invoiceService:InvoiceService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getInvoices();
  }

  getInvoices(): void{
    console.log("Inside getInvoices()");
    this._invoiceService.getAllInvoices()
    .subscribe((invoiceData)=> this.invoices= invoiceData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getInvoices()");
  }

}