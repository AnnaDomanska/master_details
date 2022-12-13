import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoDetailsComponent } from './crypto-details.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [CryptoDetailsComponent],
  providers: [],
  exports: [CryptoDetailsComponent]
})
export class CryptoDetailsComponentModule {

}
