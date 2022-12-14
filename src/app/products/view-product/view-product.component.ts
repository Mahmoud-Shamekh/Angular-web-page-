import { HttpParams } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
product: Product[] = [];
categories: any[] = [];
  search = "";
  totalLength: number;
  itemPerPage: number;
  page: number = 1;
  skip = 0;

  constructor(
    private productService: ProductService ,
     private router: Router
    ) { }

  ngOnInit(): void {
    // fetch data
    this.getProducts(this.skip);
    this.getAllCategories()
  }

/// for loop pagination
counter(i: number) {
    return new Array(i);
  };

  // get all product with calling api - products
  getProducts(skip: number) {
    this.skip = skip;
    let queryParam = new HttpParams();
    queryParam= queryParam.set('limit',10),
    queryParam= queryParam.set('skip',this.skip),
    this.productService.getAllProduct(queryParam).subscribe((res:any[]) => {
      // total length
      this.totalLength = res['total'];
      this.itemPerPage=res['limit']

      /// to call product from main object response
      this.product = res['products'];

    })
  };


  /// get all category with calling api
  getAllCategories() {
    this.productService.productCategories().subscribe( (resCateg:[])=> {

      this.categories = resCateg;
    })
  };

  // to filter data by category
  filterData(filteredProducts) {
    this.productService.FilterdProduct(filteredProducts).subscribe((respose: []) => {
      this.product = respose['products'];
    })
  };

  // get all data
   onFilterProduct(event: any) {
     let value = event.target.value;
     console.log(value)
    if (value !== "All") {
      this.filterData(value);
    } else {
      this.getProducts(this.skip);
    }
  };

  // search About product
  searchForProduct() {
    let queryParam = new HttpParams();
    queryParam = queryParam.set('q', this.search);

    this.productService.searchProduct(queryParam).subscribe((res: any) => {
      this.product=res['products']
    })
  }

// clear input search  (not used know) -- usee if i make delet btn
  clearSearch() {
    this.search = "";
    this.getProducts(this.skip);

  }

}
