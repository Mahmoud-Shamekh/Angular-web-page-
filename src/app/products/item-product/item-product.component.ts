import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



 convert() {
 console.log(((this.data.price)- ((this.data.price)*((this.data.discountPercentage)/100))).toFixed(2))
  }

}
