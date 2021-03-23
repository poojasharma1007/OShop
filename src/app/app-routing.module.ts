import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthguardService } from './services/authguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'products', component:ProductsComponent },
  { path: 'shopping-cart', component:ShoppingCartComponent },
  { path: 'login', component:LoginComponent },

  { path: 'check-out', component:CheckOutComponent, canActivate:[AuthguardService] },
  { path: 'order-success', component:OrderSuccessComponent,canActivate:[AuthguardService] },
  { path: 'my-orders', component:MyOrdersComponent, canActivate:[AuthguardService]},

  { path: 'admin/products', component:AdminProductsComponent,canActivate:[AuthguardService] },
  { path: 'admin/product-form', component:ProductFormComponent,canActivate:[AuthguardService] },
  { path: 'admin/orders', component:AdminOrdersComponent,canActivate:[AuthguardService] }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
