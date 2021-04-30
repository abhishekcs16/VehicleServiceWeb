import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFaultService } from '../service-fault.service';
import { ServiceFault } from '../servicefault';

@Component({
  selector: 'app-service-fault-list',
  templateUrl: './service-fault-list.component.html',
  styleUrls: ['./service-fault-list.component.css']
})
export class ServiceFaultListComponent implements OnInit {

  serviceFault = new ServiceFault();
  statusMessage : string;
  serviceFaults: ServiceFault[];

  constructor(private _serviceFaultService:ServiceFaultService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getServiceFaults();
  }

  getServiceFaults(): void{
    console.log("Inside getServiceFaults()");
    this._serviceFaultService.getAllServiceFaults()
    .subscribe((serviceFaultData)=> this.serviceFaults= serviceFaultData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getServiceFaults()");
  }

}
