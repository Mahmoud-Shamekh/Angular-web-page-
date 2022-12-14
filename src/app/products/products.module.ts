import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations: [
        ViewProductComponent,
        ItemProductComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        NgxPaginationModule

    ]
})
export class ProductsModule { }
