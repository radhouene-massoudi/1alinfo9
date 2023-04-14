import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  addProduct(data:any){
    return this.http.post('http://localhost:3000/products',data)
  }
  fetchProduct():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  updateProduct(data:any,id:any){
return this.http.put('http://localhost:3000/products/'+id,data)
  }
  fetchProductById(id:any):Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/'+id)
      }
      removeProduct(id:any){
        return this.http.delete('http://localhost:3000/products/'+id)
          }
}
