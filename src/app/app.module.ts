import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './core/mange Product/detail/detail.component';
import { AddproductComponent } from './core/mange Product/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './core/mange Product/products/products.component';
import { UpdateComponent } from './core/mange Product/update/update.component';
import { RemoveproductComponent } from './core/mange Product/removeproduct/removeproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestComponent,
    NotfoundComponent,
    LoginComponent,
    DetailComponent,
    AddproductComponent,
    ProductsComponent,
    UpdateComponent,
    RemoveproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
