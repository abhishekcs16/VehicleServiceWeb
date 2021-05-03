import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceFaultService } from '../service-fault.service';
import { ServiceFault } from '../servicefault';

@Component({
  selector: 'app-service-fault',
  templateUrl: './service-fault.component.html',
  styleUrls: ['./service-fault.component.css']
})
export class ServiceFaultComponent implements OnInit {

  serviceFaults:ServiceFault[];
  
  statusMessage: string;
 
  service = new Service();
  serviceFault = new ServiceFault();
  
 
  constructor(private _serviceFaultService: ServiceFaultService,
    private _router : Router) { }

  ngOnInit(): void {
    this.serviceFault.service=this.service;
    this.getServiceFaults();
  }

  getServiceFaults(): void{
    this._serviceFaultService.getAllServiceFaults()
    .subscribe((serviceFaultData)=> {this.serviceFaults=serviceFaultData;
    console.log(serviceFaultData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addServiceFault():void{
    this._serviceFaultService.addServiceFault(this.serviceFault)
    .subscribe((response)=>{console.log(response); this.getServiceFaults(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    alert('Data Successfully Added!! :-)\n\n');
    this._router.navigate(['addInvoice']);
  }

  private reset(){
    this.serviceFault.faultid=null;
    this.serviceFault.faultType=null;
    this.serviceFault.faultDate=null;
    
    this.serviceFault.service.serviceId=null;

  }

  deleteServiceFault(serviceFaultId: string){
    console.log("Inside delete , serviceFault id= "+serviceFaultId);
    this._serviceFaultService.deleteServiceFault(serviceFaultId)
    .subscribe((response)=> {console.log(response); this.getServiceFaults();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteServiceFault()");
  }

  getServiceFault(serviceFaultId:string){
    this._serviceFaultService.getServiceFaultsById(serviceFaultId)
    .subscribe((serviceFaultData)=>{
      this.serviceFault = serviceFaultData;
      this.getServiceFaults();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}
