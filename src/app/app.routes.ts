import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ProductsComponent } from '../app/products/products.component';
import {ContactComponent} from '../app/contact/contact.component'
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path:'contact',component :ContactComponent}
];
