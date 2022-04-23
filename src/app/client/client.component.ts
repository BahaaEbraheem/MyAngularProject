import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 BahaaForm  = new FormGroup({
    Name: new FormControl(''),
    Age: new FormControl(''),
    Address: new FormControl(''),
    Job: new FormControl(''),
  })
  constructor() { }
  Submit(){
    console.log(this.BahaaForm.value);
  }
  ngOnInit(): void {
  }

}
