import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ProductsComponent } from '../app/products/products.component';
import { ProductDetailComponent } from '../app/products/product-detail/product-detail.component';
import { ContactComponent } from '../app/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
];
