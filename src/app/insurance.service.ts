import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private _httpService : Http) { }

  getAllInsurances():Observable<Insurance[]>{
    return this._httpService.get("http://localhost:9898/vss/api/insurances")
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }
  
  getInsurancesById(insuranceId: string): Observable<Insurance>{
    return this._httpService.get("http://localhost:9898/vss/api/insurances/"+insuranceId)
    .map((response:Response)=> response.json())
    .catch(this.handleError);
  }
  
  addInsurance(insurance:Insurance){
    let body= JSON.parse(JSON.stringify(insurance));
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers: headers});
    if(insurance.insuranceNo){
      return this._httpService.put("http://localhost:9898/vss/api/insurances/"+insurance.insuranceNo, body, options);
    }else{
      return this._httpService.post("http://localhost:9898/vss/api/insurances",body,options);
    }
  }
  
  deleteInsurance(insuranceId:string){
    return this._httpService.delete("http://localhost:9898/vss/api/insurances/"+insuranceId);
  }
  
  private handleError(error:Response){
    return Observable.throw(error);
  }
  
  }
