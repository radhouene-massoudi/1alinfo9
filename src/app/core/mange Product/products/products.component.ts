import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products!:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.productService.fetchProduct().subscribe(
    (d)=>{
     this.products=d;
    }
   );
  }

}
