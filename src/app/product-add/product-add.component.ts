import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private productService: ProductService, private router: Router) { }

  addProduct() {
    this.productService.addProduct(this.name, this.price, this.quantity).subscribe();
    this.router.navigate(['products']);
  }
}
