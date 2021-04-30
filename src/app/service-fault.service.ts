import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceFault } from './servicefault';

@Injectable({
  providedIn: 'root'
})
export class ServiceFaultService {

  constructor(private _httpService : Http) { }

getAllServiceFaults():Observable<ServiceFault[]>{
  return this._httpService.get("http://localhost:9898/vss/api/serviceFaults")
  .map((response: Response)=> response.json())
  .catch(this.handleError);
}

getServiceFaultsById(serviceFaultId: string): Observable<ServiceFault>{
  return this._httpService.get("http://localhost:9898/vss/api/serviceFaults/"+serviceFaultId)
  .map((response:Response)=> response.json())
  .catch(this.handleError);
}

addServiceFault(serviceFault:ServiceFault){
  let body= JSON.parse(JSON.stringify(serviceFault));
  let headers = new Headers({'Content-type':'application/json'});
  let options = new RequestOptions({headers: headers});
  if(serviceFault.faultid){
    return this._httpService.put("http://localhost:9898/vss/api/serviceFaults/"+serviceFault.faultid, body, options);
  }else{
    return this._httpService.post("http://localhost:9898/vss/api/serviceFaults",body,options);
  }
}

deleteServiceFault(serviceFaultId:string){
  return this._httpService.delete("http://localhost:9898/vss/api/serviceFaults/"+serviceFaultId);
}

private handleError(error:Response){
  return Observable.throw(error);
}

}
