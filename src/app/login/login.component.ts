import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  selectedDay: string = '';
  selectedcolor: string = '';

  selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;
  }
  colors=['red','yellow','green'];
  select (event: any) {
    this.selectedcolor = event.target.value;
    alert(this.selectedcolor);
  }
  constructor() {
   
  }
  
  ngOnInit() {
   
  }
  
}

