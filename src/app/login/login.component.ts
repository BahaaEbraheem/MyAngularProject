import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginState:string="Login";
  IsAuth:boolean=false;
  Toggle(){
    this.IsAuth=!this.IsAuth;
    this.LoginState=this.IsAuth?"Logout":"Login";

  }



  name:string="Bahaa";
  cars=['Mercides','Toyota','Honda','KIA'];
  SelectedCar:string='';
  MyFunction(event:any){
   this.SelectedCar = event.target.value;
   alert(this.SelectedCar)
  }
  constructor() {
   
  }
  
  ngOnInit() {
   
  }
  
}

