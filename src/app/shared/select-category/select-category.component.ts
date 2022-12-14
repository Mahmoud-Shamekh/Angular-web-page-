import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {
  @Input() title: string;
  @Input() dataSelected: []
  @Output() SelectData = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
selectData(event:any) {
    this.SelectData.emit(event)
  }
}

