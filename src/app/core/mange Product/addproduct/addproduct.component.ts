import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirstService } from 'src/app/first.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
somme:any;
  constructor(
    private service:FirstService,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.somme=this.service.sum(5,8);
    console.log(this.somme);
    this.service.test();
    
  }
  showForm(t:any){
    console.log(t)
  }
  submitData(d:any){
this.productService.addProduct(d).subscribe(
  ()=>{
alert('added')
  },
  (err)=>{
   // console.log('errorssssss');
   console.log(err.status);
   //SWITCH CASE
  },
  ()=>{
    alert('comp')
  }
);
  }
  
}
