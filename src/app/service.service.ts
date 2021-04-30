import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpService : Http) { }

  getAllServices():Observable<Service[]>{
    return this._httpService.get("http://localhost:9898/vss/api/services")
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }
  
  getServicesById(serviceId: string): Observable<Service>{
    return this._httpService.get("http://localhost:9898/vss/api/services/"+serviceId)
    .map((response:Response)=> response.json())
    .catch(this.handleError);
  }
  
  addService(service:Service){
    let body= JSON.parse(JSON.stringify(service));
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers: headers});
    if(service.serviceId){
      return this._httpService.put("http://localhost:9898/vss/api/services/"+service.serviceId, body, options);
    }else{
      return this._httpService.post("http://localhost:9898/vss/api/services",body,options);
    }
  }
  
  deleteService(serviceId:string){
    return this._httpService.delete("http://localhost:9898/vss/api/services/"+serviceId);
  }
  
  private handleError(error:Response){
    return Observable.throw(error);
  }
  
  }
