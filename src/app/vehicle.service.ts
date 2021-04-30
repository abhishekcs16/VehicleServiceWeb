import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpService : Http) { }

getAllVehicles():Observable<Vehicle[]>{
  return this._httpService.get("http://localhost:9898/vss/api/vehicles")
  .map((response: Response)=> response.json())
  .catch(this.handleError);
}

getVehiclesById(vehicleId: string): Observable<Vehicle>{
  return this._httpService.get("http://localhost:9898/vss/api/vehicles/"+vehicleId)
  .map((response:Response)=> response.json())
  .catch(this.handleError);
}

addVehicle(vehicle:Vehicle){
  let body= JSON.parse(JSON.stringify(vehicle));
  let headers = new Headers({'Content-type':'application/json'});
  let options = new RequestOptions({headers: headers});
  if(vehicle.vehicleRegNo){
    return this._httpService.put("http://localhost:9898/vss/api/vehicles/"+vehicle.vehicleRegNo, body, options);
  }else{
    return this._httpService.post("http://localhost:9898/vss/api/vehicles",body,options);
  }
}

deleteVehicle(vehicleId:string){
  return this._httpService.delete("http://localhost:9898/vss/api/vehicles/"+vehicleId);
}

private handleError(error:Response){
  return Observable.throw(error);
}

}