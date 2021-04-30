import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Mechanic } from './mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private _httpService : Http) { }

  getAllMechanics():Observable<Mechanic[]>{
    return this._httpService.get("http://localhost:9898/vss/api/mechanics")
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }
  
  getMechanicsById(mechanicId: string): Observable<Mechanic>{
    return this._httpService.get("http://localhost:9898/vss/api/mechanics/"+mechanicId)
    .map((response:Response)=> response.json())
    .catch(this.handleError);
  }
  
  addMechanic(mechanic:Mechanic){
    let body= JSON.parse(JSON.stringify(mechanic));
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers: headers});
    if(mechanic.mechanicId){
      return this._httpService.put("http://localhost:9898/vss/api/mechanics/"+mechanic.mechanicId, body, options);
    }else{
      return this._httpService.post("http://localhost:9898/vss/api/mechanics",body,options);
    }
  }
  
  deleteMechanic(mechanicId:string){
    return this._httpService.delete("http://localhost:9898/vss/api/mechanics/"+mechanicId);
  }
  
  private handleError(error:Response){
    return Observable.throw(error);
  }
  
  }