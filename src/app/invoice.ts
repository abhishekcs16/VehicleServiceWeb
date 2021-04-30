import { Insurance } from "./insurance";
import { Service } from "./service";

export class Invoice{
     invoiceId:number;
	
     labourCharges:string;
    
     serviceCharges:string;
    
      date:string;

      service:Service;
      insurance:Insurance;
      constructor(){}
}