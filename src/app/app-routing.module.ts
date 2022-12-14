import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeDetailsComponentModule } from './components/employee-details/employee-details.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserServiceModule } from './services/user.service-module';
import { CryptoDetailsComponentModule } from './components/crypto-details/crypto-details.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductDetailsComponent }, { path: 'employees-master-details', component: EmployeeDetailsComponent }, { path: 'users-master-details', component: UserDetailsComponent }, { path: 'crypto-master-details', component: CryptoDetailsComponent }]), ProductDetailsComponentModule, ProductServiceModule, EmployeeDetailsComponentModule, EmployeeServiceModule, UserDetailsComponentModule, UserServiceModule, CryptoDetailsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
