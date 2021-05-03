import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mechanic } from '../mechanic';
import { MechanicService } from '../mechanic.service';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {
  mechanics:Mechanic[];
  
  statusMessage: string;
  
  mechanic = new Mechanic();
  
 
  constructor(private _mechanicService: MechanicService,
    private _router : Router) { }

  ngOnInit(): void {
    
    this.getMechanics();
  }

  getMechanics(): void{
    this._mechanicService.getAllMechanics()
    .subscribe((mechanicData)=> {this.mechanics=mechanicData;
    console.log(mechanicData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addMechanic():void{
    this._mechanicService.addMechanic(this.mechanic)
    .subscribe((response)=>{console.log(response); this.getMechanics(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    alert('Data Successfully Added!! :-)\n\n');
  }

  private reset(){
    this.mechanic.mechanicId=null;
    this.mechanic.mechanicName=null;
    this.mechanic.mechanicContact=null;
    

  }

  deleteMechanic(mechanicId: string){
    console.log("Inside delete , mechanic id= "+mechanicId);
    this._mechanicService.deleteMechanic(mechanicId)
    .subscribe((response)=> {console.log(response); this.getMechanics();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteMechanic()");
  }

  getMechanic(mechanicId:string){
    this._mechanicService.getMechanicsById(mechanicId)
    .subscribe((mechanicData)=>{
      this.mechanic = mechanicData;
      this.getMechanics();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}
