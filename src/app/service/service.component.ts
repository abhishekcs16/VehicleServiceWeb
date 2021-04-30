import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobCard } from '../jobcard';
import { Mechanic } from '../mechanic';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  
  services:Service[];
  
  statusMessage: string;
  jobCard = new JobCard();
  mechanic = new Mechanic();
  service = new Service();
  
 
  constructor(private _serviceService: ServiceService,
    private _router : Router) { }

  ngOnInit(): void {
    this.service.jobCard=this.jobCard;
    this.service.mechanic=this.mechanic;
    this.getServices();
  }

  getServices(): void{
    this._serviceService.getAllServices()
    .subscribe((serviceData)=> {this.services=serviceData;
    console.log(serviceData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addService():void{
    this._serviceService.addService(this.service)
    .subscribe((response)=>{console.log(response); this.getServices(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    this._router.navigate(['addServiceFault']);
  }

  private reset(){
    this.service.serviceId=null;
    this.service.serviceType=null;
    this.service.addedPart=null;
    this.service.serviceDate=null;
    this.service.jobCard.jobId=null;
    this.service.mechanic.mechanicId=null;

  }

  deleteService(serviceId: string){
    console.log("Inside delete , service id= "+serviceId);
    this._serviceService.deleteService(serviceId)
    .subscribe((response)=> {console.log(response); this.getServices();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteService()");
  }

  getService(serviceId:string){
    this._serviceService.getServicesById(serviceId)
    .subscribe((serviceData)=>{
      this.service = serviceData;
      this.getServices();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}

