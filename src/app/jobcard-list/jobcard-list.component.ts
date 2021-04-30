import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobCard } from '../jobcard';
import { JobcardService } from '../jobcard.service';

@Component({
  selector: 'app-jobcard-list',
  templateUrl: './jobcard-list.component.html',
  styleUrls: ['./jobcard-list.component.css']
})
export class JobcardListComponent implements OnInit {

  jobCard = new JobCard();
  statusMessage : string;
  jobCards: JobCard[];

  constructor(private _jobCardService:JobcardService,
    private _router : Router) { }

  ngOnInit(): void {
    console.log("Calling ngOnInit()");
    this.getJobCards();
  }

  getJobCards(): void{
    console.log("Inside getJobCards()");
    this._jobCardService.getAllJobCards()
    .subscribe((jobCardData)=> this.jobCards= jobCardData,
    (error)=>{
      console.log(error);
      this.statusMessage="Problem with service. Please try again later!!";
    }
    );
    console.log("end of getJobCards()");
  }

}

