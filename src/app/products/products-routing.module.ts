import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth/auth-guard.guard';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [

  {path:'product' , component:ViewProductComponent ,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
