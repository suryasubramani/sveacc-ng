import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm = new FormGroup({
    productName: new FormControl(),
    productBrand: new FormControl(),
    category: new FormControl(),
    quantity: new FormControl(),
    price: new FormControl(),
    provider: new FormControl(),
  });

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  addProduct() {
    this.api.createProduct(this.addProductForm.value).subscribe(
      (data) => {
        console.log(data);
        this.addProductForm.reset();
      }
    );
  }

}
