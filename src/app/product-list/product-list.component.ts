import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: Object;
  searchText: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getProducts().subscribe(
      data => {
        this.allProducts = data;
      }
    );
  }

}
