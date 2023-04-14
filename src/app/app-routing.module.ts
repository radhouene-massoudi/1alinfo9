import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './core/mange Product/detail/detail.component';
import { AddproductComponent } from './core/mange Product/addproduct/addproduct.component';
import { ProductsComponent } from './core/mange Product/products/products.component';
import { UpdateComponent } from './core/mange Product/update/update.component';
import { RemoveproductComponent } from './core/mange Product/removeproduct/removeproduct.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'remove/:id',component:RemoveproductComponent},
  {path:'products',component:ProductsComponent},
  {path:'add',component:AddproductComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'test',component:TestComponent},
  {path:'f',component:FirstComponent},
  {path:'detail/:test',component:DetailComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(r)],

exports: [RouterModule]
})
export class AppRoutingModule { }
