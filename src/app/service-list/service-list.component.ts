import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  service = new Service();
  statusMessage : string;
  services: Service[];

  constructor(private _serviceService:ServiceService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getServices();
  }

  getServices(): void{
    console.log("Inside getServices()");
    this._serviceService.getAllServices()
    .subscribe((serviceData)=> this.services= serviceData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getServices()");
  }

}