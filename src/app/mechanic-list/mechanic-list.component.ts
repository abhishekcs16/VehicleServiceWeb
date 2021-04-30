import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mechanic } from '../mechanic';
import { MechanicService } from '../mechanic.service';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {

  mechanicContact:any;
  mechanic = new Mechanic();
  statusMessage : string;
  mechanics: Mechanic[];

  constructor(private _mechanicService:MechanicService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getMechanics();
  }

  getMechanics(): void{
    console.log("Inside getMechanics()");
    this._mechanicService.getAllMechanics()
    .subscribe((mechanicData)=> this.mechanics= mechanicData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getMechanics()");
  }
  Search(){
    if(this.mechanicContact ==""){
      this.ngOnInit();
    }else{
      this.mechanics= this.mechanics.filter(res =>{
        return res.mechanicContact.toLocaleLowerCase().match(
          this.mechanicContact.toLocaleLowerCase())
      })
      }
    }
}
