import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insurances:Insurance[];
  
  statusMessage: string;
  vehicle = new Vehicle();
  insurance = new Insurance();
  
 
  constructor(private _insuranceService: InsuranceService,
    private _router : Router) { }

  ngOnInit(): void {
    this.insurance.vehicle=this.vehicle;
    this.getInsurances();
  }

  getInsurances(): void{
    this._insuranceService.getAllInsurances()
    .subscribe((insuranceData)=> {this.insurances=insuranceData;
    console.log(insuranceData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addInsurance():void{
    this._insuranceService.addInsurance(this.insurance)
    .subscribe((response)=>{console.log(response); this.getInsurances(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    alert('Data Successfully Added!! :-)\n\n');
    this._router.navigate(['addJobCard']);
  }

  private reset(){
    this.insurance.insuranceNo=null;
    this.insurance.insuranceDate=null;
    this.insurance.insuranceAmount=null;
   
    this.insurance.vehicle.vehicleRegNo=null;

  }

  deleteInsurance(insuranceId: string){
    console.log("Inside delete , insurance id= "+insuranceId);
    this._insuranceService.deleteInsurance(insuranceId)
    .subscribe((response)=> {console.log(response); this.getInsurances();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteInsurance()");
  }

  getInsurance(insuranceId:string){
    this._insuranceService.getInsurancesById(insuranceId)
    .subscribe((insuranceData)=>{
      this.insurance = insuranceData;
      this.getInsurances();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}
