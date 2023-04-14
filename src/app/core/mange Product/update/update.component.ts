import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
product=new Product();
  constructor(
    private ac:ActivatedRoute,
    private ps:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.ps.fetchProductById(this.ac.snapshot.params['id']).subscribe(
      (result)=>{
        this.product=result
      }
    )
  }
update(f:any){
  this.ps.updateProduct(f,this.ac.snapshot.params['id']).subscribe(
    ()=>{
      this.router.navigate(['products'])
    }
  );
}
}
