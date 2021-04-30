import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _httpService : Http) { }

getAllInvoices():Observable<Invoice[]>{
  return this._httpService.get("http://localhost:9898/vss/api/invoices")
  .map((response: Response)=> response.json())
  .catch(this.handleError);
}

getInvoicesById(invoiceId: string): Observable<Invoice>{
  return this._httpService.get("http://localhost:9898/vss/api/invoices/"+invoiceId)
  .map((response:Response)=> response.json())
  .catch(this.handleError);
}

addInvoice(invoice:Invoice){
  let body= JSON.parse(JSON.stringify(invoice));
  let headers = new Headers({'Content-type':'application/json'});
  let options = new RequestOptions({headers: headers});
  if(invoice.invoiceId){
    return this._httpService.put("http://localhost:9898/vss/api/invoices/"+invoice.invoiceId, body, options);
  }else{
    return this._httpService.post("http://localhost:9898/vss/api/invoices",body,options);
  }
}

deleteInvoice(invoiceId:string){
  return this._httpService.delete("http://localhost:9898/vss/api/invoices/"+invoiceId);
}

private handleError(error:Response){
  return Observable.throw(error);
}

}
