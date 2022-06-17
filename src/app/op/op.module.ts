import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpRoutingModule } from './op-routing.module';
import { OpComponent } from './op.component';


@NgModule({
  declarations: [
    OpComponent
  ],
  imports: [
    CommonModule,
    OpRoutingModule
  ]
})
export class OpModule { }
