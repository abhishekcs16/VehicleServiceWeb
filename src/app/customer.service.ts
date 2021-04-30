import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpService : Http) { }

  getAllCustomers():Observable<Customer[]>{
    return this._httpService.get("http://localhost:9898/vss/api/customers")
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }

  getCustomersById(id: string): Observable<Customer>{
    return this._httpService.get("http://localhost:9898/vss/api/customers/"+ id)
    .map((response:Response)=> response.json())
    .catch(this.handleError);
  }

  addCustomer(customer:Customer){
    let body= JSON.parse(JSON.stringify(customer));
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers: headers});
    if(customer.id){
      return this._httpService.put("http://localhost:9898/vss/api/customers/"+ customer.id, body, options);
    }else{
      return this._httpService.post("http://localhost:9898/vss/api/customers",body,options);
    }
  }

  deleteCustomer(id:string){
    return this._httpService.delete("http://localhost:9898/vss/api/customers/"+ id);
  }

  private handleError(error:Response){
    return Observable.throw(error);
  }

}