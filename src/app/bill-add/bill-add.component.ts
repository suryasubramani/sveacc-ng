import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnInit {

  newBillForm = new FormGroup({
    customerName: new FormControl(),
    phoneNumber: new FormControl(),
    sgst: new FormControl(),
    cgst: new FormControl(),
    totalAmount: new FormControl(),
    roundOff: new FormControl(),
  });

  items = [];
  selectedProduct: Object;
  selectedId: String;
  allProducts: Object;
  date: Date;
  searchtext: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe(
      data => {
        this.allProducts = data;
        this.selectedProduct = data[0];
      }
    );
  }

  selectChange() {
    this.api.getProductById(this.selectedId).subscribe(
      data => {
        this.selectedProduct = data;
      }
    );
  }

}
