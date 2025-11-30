import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Root2 } from '../services/product.types';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Root2[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  // track which product detail is shown inline (by id)
  selectedDetailId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.errorMessage = null;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.isLoading = false;
      },
    });
  }

  toggleDetail(id: number) {
    this.selectedDetailId = this.selectedDetailId === id ? null : id;
  }

  trackById(index: number, item: Root2) {
    return item.id;
  }
}
