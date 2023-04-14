import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {

  constructor(private ps:ProductService,
    private ac:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.ps
    .removeProduct(this.ac.snapshot.params['id'])
    .subscribe(
      ()=>{
        this.router.navigate(['products'])
      }
    )
  }

}
