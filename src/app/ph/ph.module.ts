import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhRoutingModule } from './ph-routing.module';
import { PhComponent } from './ph.component';


@NgModule({
  declarations: [
    PhComponent
  ],
  imports: [
    CommonModule,
    PhRoutingModule
  ]
})
export class PhModule { }
