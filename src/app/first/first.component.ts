import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnChanges {
klass="1 alinfo9";
kolor='red';
search='';
listProdcut:Product[]=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  
  constructor() { 
    console.log('cons')
  }

  ngOnInit(): void {
    console.log('oninit')
  }
ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
}
decreaseQuantity(index:any){
console.log(index);
//p.quantity--;
this.listProdcut[index].quantity--;
}
like(i:any){
  this.listProdcut[i].like++;
}

showMsg(){
  alert('bonjour');
}
changeColor(){
  this.kolor='pink'
}

}
