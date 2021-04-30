import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string;
  password: string;

  constructor(private ls: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  doLogin(){
    console.log("username " + this.username);
    console.log("password " + this.password);
    this.ls.login(this.username, this.password)
      .subscribe((data) => {
        console.log(data);
        alert('login Success');
        this.gotoIndex();
      },
      error=>{
        alert('Please Enter Valid Password');
      })
  }

  gotoIndex(){
    this.router.navigate(['index']);
  }

}
