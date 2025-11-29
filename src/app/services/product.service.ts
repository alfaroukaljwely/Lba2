import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgURL: string;
  categoryID: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private ProductList: Product[] = [
    {
      id: 100,
      name: 'LenovoThinkpad laptop',
      price: 100000000,
      quantity: 1,
      imgURL: '/1299194.jpg',
      categoryID: 1,
    },
    {
      id: 200,
      name: 'Apple MacBook laptop',
      price: 2007780,
      quantity: 0,
      imgURL: '/736462.png',
      categoryID: 1,
    },
    {
      id: 300,
      name: 'Lenovo Tab 2',
      price: 3000,
      quantity: 10,
      imgURL: '/742320.png',
      categoryID: 2,
    },
    {
      id: 400,
      name: 'Samsung Tab',
      price: 40.5,
      quantity: 2,
      imgURL: '/742320.png',
      categoryID: 2,
    },
    {
      id: 500,
      name: 'Smasung Note 10',
      price: 50000,
      quantity: 0,
      imgURL: '/1374648.png',
      categoryID: 3,
    },
    {
      id: 600,
      name: 'Samsung S22 Utlra',
      price: 600,
      quantity: 1,
      imgURL: '/1299194.jpg',
      categoryID: 3,
    },
    {
      id: 700,
      name: 'apple S22 Utlra',
      price: 500,
      quantity: 4,
      imgURL: '/736462.png',
      categoryID: 4,
    },
    {
      id: 800,
      name: 'tochiba Utlra',
      price: 60000,
      quantity: 14,
      imgURL: '/1374648.png',
      categoryID: 4,
    },
    {
      id: 900,
      name: 'ththt Utlra',
      price: 60,
      quantity: 0,
      imgURL: '/736462.png',
      categoryID: 4,
    },
  ];

  constructor() {}

  // Get all products
  getAllProducts(): Product[] {
    return this.ProductList;
  }

  // Get products by category
  filterProductsByCategory(category: number): Product[] {
    if (category == 0) return this.ProductList;
    else return this.ProductList.filter((item) => item.categoryID == category);
  }

  // Get single product by ID
  getProductById(id: number): Product | null {
    let found = this.ProductList.find((item) => item.id == id);
    if (found) return found;
    else return null;
  }
}
