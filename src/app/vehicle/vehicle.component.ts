import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

 
  vehicles:Vehicle[];
  
  statusMessage: string;
  customer = new Customer();
  vehicle = new Vehicle();
  
 
  constructor(private _vehicleService: VehicleService,
    private _router : Router) { }

  ngOnInit(): void {
    this.vehicle.customer=this.customer;
    this.getVehicles();
  }

  getVehicles(): void{
    this._vehicleService.getAllVehicles()
    .subscribe((vehicleData)=> {this.vehicles=vehicleData;
    console.log(vehicleData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addVehicle():void{
    this._vehicleService.addVehicle(this.vehicle)
    .subscribe((response)=>{console.log(response); this.getVehicles(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    this._router.navigate(['addInsurance']);
  }

  private reset(){
    this.vehicle.vehicleRegNo=null;
    this.vehicle.vehicleModel=null;
    this.vehicle.engineNo=null;
    this.vehicle.chasisNo=null;
    this.vehicle.customer.id=null;

  }

  deleteVehicle(vehicleId: string){
    console.log("Inside delete , vehicle id= "+vehicleId);
    this._vehicleService.deleteVehicle(vehicleId)
    .subscribe((response)=> {console.log(response); this.getVehicles();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteVehicle()");
  }

  getVehicle(vehicleId:string){
    this._vehicleService.getVehiclesById(vehicleId)
    .subscribe((vehicleData)=>{
      this.vehicle = vehicleData;
      this.getVehicles();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}

