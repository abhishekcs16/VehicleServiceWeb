import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(username: string, password:string){
    console.log(username + " : " + password)
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username+":"+password)});
    return this.http.get("http://localhost:9898/vss/", {headers, responseType: 'text' as 'json'});
  }
}