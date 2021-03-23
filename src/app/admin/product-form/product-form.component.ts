import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;;

  constructor(categoryservice: CategoryService,private productservice:ProductService) {
    this.categories$=categoryservice.getCategrory();
    console.log(this.categories$);
   }

  ngOnInit(): void {
  }
save(product){
  console.log(product.value);
  this.productservice.createProduct(product.value);
}
}
