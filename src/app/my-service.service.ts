import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
SayHello(ComponentName:string){
alert("the component Name is: "+ComponentName)
}
  constructor() { }
}
