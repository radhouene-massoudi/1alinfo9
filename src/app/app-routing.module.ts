import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

import { FirstComponent } from './first/first.component';

const r: Routes = [
  {path:'test',component:TestComponent},
  {path:'f',component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(r)],

exports: [RouterModule]
})
export class AppRoutingModule { }
