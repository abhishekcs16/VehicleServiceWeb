import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JobCard } from './jobcard';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  constructor(private _httpService : Http) { }

  getAllJobCards():Observable<JobCard[]>{
    return this._httpService.get("http://localhost:9898/vss/api/jobCards")
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }
  
  getJobCardsById(jobCardId: string): Observable<JobCard>{
    return this._httpService.get("http://localhost:9898/vss/api/jobCards/"+jobCardId)
    .map((response:Response)=> response.json())
    .catch(this.handleError);
  }
  
  addJobCard(jobCard:JobCard){
    let body= JSON.parse(JSON.stringify(jobCard));
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers: headers});
    if(jobCard.jobId){
      return this._httpService.put("http://localhost:9898/vss/api/jobCards/"+jobCard.jobId, body, options);
    }else{
      return this._httpService.post("http://localhost:9898/vss/api/jobCards",body,options);
    }
  }
  
  deleteJobCard(jobCardId:string){
    return this._httpService.delete("http://localhost:9898/vss/api/jobCards/"+jobCardId);
  }
  
  private handleError(error:Response){
    return Observable.throw(error);
  }
  
  }
