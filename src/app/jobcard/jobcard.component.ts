import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobCard } from '../jobcard';
import { JobcardService } from '../jobcard.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  jobCards:JobCard[];
  
  statusMessage: string;
  vehicle = new Vehicle();
  jobCard = new JobCard();
  
 
  constructor(private _jobCardService: JobcardService,
    private _router : Router) { }

  ngOnInit(): void {
    this.jobCard.vehicle=this.vehicle;
    this.getJobCards();
  }

  getJobCards(): void{
    this._jobCardService.getAllJobCards()
    .subscribe((jobCardData)=> {this.jobCards=jobCardData;
    console.log(jobCardData);},
    (error)=> {
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!"
    }
    );
  }

  addJobCard():void{
    this._jobCardService.addJobCard(this.jobCard)
    .subscribe((response)=>{console.log(response); this.getJobCards(); this.reset();},
    (error)=>{
    console.log(error);
    this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    this._router.navigate(['addService']);
  }

  private reset(){
    this.jobCard.jobId=null;
    this.jobCard.issues=null;
    this.jobCard.remarks=null;
    this.jobCard.date=null;
    this.jobCard.vehicle.vehicleRegNo=null;

  }

  deleteJobCard(jobCardId: string){
    console.log("Inside delete , jobCard id= "+jobCardId);
    this._jobCardService.deleteJobCard(jobCardId)
    .subscribe((response)=> {console.log(response); this.getJobCards();
    }, (error) =>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    });
    this.reset();
    console.log("end of deleteJobCard()");
  }

  getJobCard(jobCardId:string){
    this._jobCardService.getJobCardsById(jobCardId)
    .subscribe((jobCardData)=>{
      this.jobCard = jobCardData;
      this.getJobCards();
    }),(error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    };
    this.reset();
  }

}

