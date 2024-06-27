import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    }, (error) => {
      console.error('Error fetching products:', error);
    });
  }

  goToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }
}
