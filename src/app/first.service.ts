import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
 
  test(){
    console.log('Bonjour first service');
  }
  sum(a:number,b:number){
return a+b;
  }
}
