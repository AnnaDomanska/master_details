import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductDetailsComponent }]), ProductDetailsComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
