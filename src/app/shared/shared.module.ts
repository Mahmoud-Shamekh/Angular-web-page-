import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthModule } from '../auth/auth.module';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';
import { SelectCategoryComponent } from './select-category/select-category.component';



@NgModule({
  declarations: [
    SelectCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,

  ],
  exports:[SelectCategoryComponent]

})
export class SharedModule { }
