import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { EmployeeDetailsComponent } from './employee-details.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponentModule {
}
