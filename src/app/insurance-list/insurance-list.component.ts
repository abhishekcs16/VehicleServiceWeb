import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  insurance = new Insurance();
  statusMessage : string;
  insurances: Insurance[];

  constructor(private _insuranceService:InsuranceService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getInsurances();
  }

  getInsurances(): void{
    console.log("Inside getInsurances()");
    this._insuranceService.getAllInsurances()
    .subscribe((insuranceData)=> this.insurances= insuranceData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getInsurances()");
  }

}