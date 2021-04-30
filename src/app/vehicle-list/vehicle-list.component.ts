import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicle = new Vehicle();
  statusMessage : string;
  vehicles: Vehicle[];

  constructor(private _vehicleService:VehicleService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getVehicles();
  }

  getVehicles(): void{
    console.log("Inside getVehicles()");
    this._vehicleService.getAllVehicles()
    .subscribe((vehicleData)=> this.vehicles= vehicleData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getVehicles()");
  }

}

