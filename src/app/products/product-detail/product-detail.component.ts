import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Root2 } from '../../services/product.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Root2 | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Check if product is passed as input (inline view)
    if (this.product) {
      return;
    }

    // Get product ID from route parameter (standalone view)
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Convert to number
      if (id) {
        this.loadProductDetail(id);
      }
    });
  }

  loadProductDetail(id: number) {
    this.isLoading = true;
    this.errorMessage = null;
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.errorMessage = 'Failed to load product details.';
        this.isLoading = false;
      },
    });
  }
}
