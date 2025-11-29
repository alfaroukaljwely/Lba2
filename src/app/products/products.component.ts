import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();
  // track which product detail is shown inline (by id)
  selectedDetailId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  allProduct(): Product[] {
    return this.products;
  }

  filterProductsByCategory(category: number): Product[] {
    return this.productService.filterProductsByCategory(category);
  }

  getOneById(id: number): Product | null {
    return this.productService.getProductById(id);
  }

  onProductClick(product: Product) {
    this.productSelected.emit(product);
  }

  toggleDetail(id: number) {
    this.selectedDetailId = this.selectedDetailId === id ? null : id;
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
